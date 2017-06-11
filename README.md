## React Native Animated Overlay
React Native Animated Overlay for iOS & Android.

This component just provide a very basic overlay view for you to build something on top of this component.

[Try it with Exponent](https://exp.host/@jacklam718/animatedoverlay-example)

![Example](https://jacklam718.github.io/react-native-animated-overlay/assets/video/react-native-animated-overlay.gif)

## Installation

`npm install --save react-native-animated-overlay`

## Examples
[Example](https://github.com/jacklam718/react-native-animated-overlay/blob/master/animatedoverlay-example/main.js)

## Usage
```javascript
import Raect, { Component } from 'react';
import AnimatedOverlay from 'react-native-animated-overlay';

class AnimatedOverlayExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayShow: false,
    };

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  openOverlay() {
    this.setState({overlayShow: true});
  }

  closeOverlay() {
    this.setState({overlayShow: false});
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
          backgroundColor='#000'
          opacity={0.5}
          duration={200}
          overlayShow={this.state.overlayShow}
        />
      </View>
    );
  }
}
```

## Props
### AnimatedOverlay
| Prop | Type | Default | Note |
|---|---|---|---|
| `onPress?` | `Function` | `() => {}` |
| `onAnimationFinished?` | `Function` |  `() => {}` |
| `backgroundColor?` | `String` | `#000` |
| `opacity?` | `Number` | `0.5` |
| `duration?` | `Number` | `200` |
| `overlayShow?` | `Bool` | `false` |
| `pointerEvents?` | `string` | `null` |
| `initValue?` | `number` | `0` |
| `style?` | `any` | `null` |
| `useNativeDriver?` | `boolean` | `false` |
| `children?` | `any` | `null` |
