## React Native Animated Overlay
React Native Animated Overlay for iOS & Android.

[Try it with Exponent](https://exp.host/@community/popup-dialog-example)

## Installation

`npm install --save react-native-animated-overlay`

## Examples
[Example](https://github.com/jacklam718/react-native-animated-overlay/blob/master/animatedoverlay-example/main.js)

## Usage
```javascript
import AnimatedOverlay from 'react-native-animated-overlay';

<AnimatedOverlay
  onPress={() => {

  }}
  backgroundColor='#000'
  opacity={0.5}
  animationDuration={200}
  showOverlay={false}
/>
```

onPress
backgroundColor
opacity
animationDuration
showOverlay
pointerEvents

## Props

### AnimatedOverlay
| Attribute | Type | Default | Note |
|---|---|---|---|
| `onPress` | `Function` |
| `backgroundColor` | `String` | #000 |
| `opacity` | `Number` | 0.5 |
| `animationDuration` | `Number` | 200 |
| `showOverlay` | `Bool` | false |
| `pointerEvents` | `String` | undefined |
