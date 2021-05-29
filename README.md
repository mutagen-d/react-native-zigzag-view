# react-native-zigzag-view
ZigzagView for using for tickets, and receipts

# Installation
```bash
yarn add react-native-zigzag-view
```
This package depends on [`react-native-svg`](https://github.com/react-native-svg/react-native-svg), make sure to install it

# Usage
```js
import React from "react"
import { Text } from "react-native"
import ZigzagView from "react-native-zigzag-view"

const Receipt = ({ date, price }) => {
  return <ZigzagView
    backgroundColor="#CCC"
    surfaceColor="#FFF"
    contentContainerStyle={{
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Text>{date}</Text>
    <Text>{price}</Text>
  </ZigzagView>
}
```

# Properties

Inherits `View` props

| Name                     | Type        | Description                                                     | Default  | Required |
| ------------------------ | ----------- | --------------------------------------------------------------- | -------- | -------- |
| `surfaceColor`           | `string`    | background color of content container's view, and zigzag jags   |          | No       |
| `backgroundColor`        | `string`    | background color of wrapper view                                |          | No       |
| `top`                    | `boolean`   | if `true`, then show zigzag border top                          | `true`   | No       |
| `bottom`                 | `boolean`   | if `true`, then show zigzag border bottom                       | `true`   | No       |
| `zigzagProps`            | [`ZigzagLinesProps`](https://github.com/mutagen-d/react-native-zigzag-lines#properties) | properties of both zigzag lines                          |          | No       |
| `style`                  | `ViewStyle` | style of wrapper view                                           |          | No       |
| `contentContainerStyle`  | `ViewStyle` | style of content container's view                               |          | No       |

## Notes
- `backgroundColor` property has precedence over corresponding attribute of `style` property
- `surfaceColor` property has precedence over `backgroundColor` attribute of `contentContainerStyle` property
- `zigzagProps` does not accept `backgroundColor`, `color`, `width`, and `position` attributes