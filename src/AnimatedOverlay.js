// @flow

import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class AnimatedOverlay extends Component {
  props: {
    onPress?: Function;
    backgroundColor: string;
    opacity: number;
    animationDuration: number;
    overlayShow: boolean;
    pointerEvents: string;
  }

  static defaultProps = {
    backgroundColor: '#000',
    opacity: 0.5,
    animationDuration: 200,
    overlayShow: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    if (this.props.overlayShow) {
      this.toValue(this.props.opacity);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.overlayShow !== nextProps.overlayShow) {
      const toValue = nextProps.overlayShow ? nextProps.opacity : 0;
      this.toValue(toValue);
    }
  }

  toValue(toValue) {
    Animated.timing(this.state.opacity, {
      toValue,
      duration: this.props.animationDuration,
    }).start();
  }

  render() {
    let { pointerEvents } = this.props;
    const { onPress, overlayShow } = this.props;
    const backgroundColor = { backgroundColor: this.props.backgroundColor };
    const opacity = { opacity: this.state.opacity };

    if (!pointerEvents) pointerEvents = overlayShow ? 'auto' : 'none';

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

export default AnimatedOverlay;
