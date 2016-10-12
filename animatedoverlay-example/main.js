import Exponent from 'exponent';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AnimatedOverlay from 'react-native-animated-overlay';

function App() {
  return (
    <View style={styles.container}>
      <AnimatedOverlay showOverlay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

Exponent.registerRootComponent(App);
