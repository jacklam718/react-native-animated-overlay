// @flow

import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    top: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    position: 'absolute',
  },
});

class AnimatedOverlay extends Component {
  props: {
    onPress?: () => void;
    backgroundColor?: string;
    opacity?: number;
    duration?: number;
    overlayShow?: boolean;
    pointerEvents?: string;
    initValue?: number;
    onAnimationFinished?: (value: number) => void;
  }

  static defaultProps = {
    onPress: () => {},
    pointerEvents: null,
    backgroundColor: '#000',
    opacity: 0.5,
    duration: 200,
    overlayShow: false,
    initValue: 0,
    onAnimationFinished: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(props.initValue),
      overlayShow: props.overlayShow,
    };
  }

  componentDidMount() {
    this.doAnimation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.overlayShow !== nextProps.overlayShow) {
      this.setState({ overlayShow: nextProps.overlayShow });
    }
  }

  componentDidUpdate() {
    this.doAnimation();
  }

  doAnimation() {
    const { overlayShow, opacity, duration, onAnimationFinished } = this.props;
    const toValue = overlayShow ? opacity : 0;
    Animated.timing(this.state.opacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(() => {
      onAnimationFinished(toValue);
    });
  }

  render() {
    let { pointerEvents } = this.props;
    const { onPress } = this.props;
    const backgroundColor = { backgroundColor: this.props.backgroundColor };
    const opacity = { opacity: this.state.opacity };

    if (!pointerEvents) pointerEvents = this.state.overlayShow ? 'auto' : 'none';

    return (
      <Animated.View
        pointerEvents={pointerEvents}
        style={[styles.overlay, backgroundColor, opacity]}
      >
        <TouchableOpacity onPress={onPress} style={[styles.overlay]} />
      </Animated.View>
    );
  }
}

export default AnimatedOverlay;
