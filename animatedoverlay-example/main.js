import Exponent from 'exponent';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AnimatedOverlay from 'react-native-animated-overlay';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayShow: false,
    };

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  openOverlay() {
    this.setState({ overlayShow: true });
  }

  closeOverlay() {
    this.setState({ overlayShow: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          text="Open Overlay"
          onPress={this.openOverlay}
        />
        <AnimatedOverlay
          onPress={this.closeOverlay}
          overlayShow={this.state.overlayShow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
