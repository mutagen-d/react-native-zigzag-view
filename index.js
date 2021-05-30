import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ZigzagLines from 'react-native-zigzag-lines'

/**
 * @template T
 * @typedef {import('react-native').StyleProp<T>} StyleProp
 */

/**
 * @typedef {import('react-native').ViewStyle} ViewStyle
 * @typedef {import('react-native').ViewProps} ViewProps
 * @typedef {import('react-native').ColorValue} ColorValue
 * @typedef {import('react-native-zigzag-lines').ZigzagLinesProps} ZigzagLinesProps
 */

/** 
 * @typedef {Omit<ViewProps, 'style'> & {
 *  style?: StyleProp<ViewStyle>
 *  surfaceColor?: ColorValue
 *  backgroundColor?: ColorValue
 *  contentContainerStyle?: StyleProp<ViewStyle>
 *  zigzagProps?: Omit<ZigzagLinesProps, 'color' | 'backgroundColor' | 'width' | 'position'>
 *  top?: boolean
 *  bottom?: boolean
 * }} ZigzagViewProps
 */

/** @type {React.FC<ZigzagViewProps>} */
const ZigzagView = (props) => {
  const {
    style,
    contentContainerStyle,
    zigzagProps,
    backgroundColor: backColor,
    surfaceColor: surfColor,
    bottom = true,
    top = true,
    ...restProps
  } = props
  const [width, setWidth] = useState()
  const backgroundColor = backColor || (style ? StyleSheet.flatten(style).backgroundColor : undefined)
  const surfaceColor = surfColor || (contentContainerStyle ? StyleSheet.flatten(contentContainerStyle).backgroundColor : undefined)
  return <View
    {...restProps}
    style={[
      {
        flexDirection: 'column',
        justifyContent: 'center',
      },
      style,
      { backgroundColor },
    ]}
  >
    {Boolean(top) && typeof width == 'number' && <ZigzagLines
      {...zigzagProps}
      width={width}
      position="top"
      backgroundColor={backgroundColor}
      color={surfaceColor}
    />}
    <View
      onLayout={e => setWidth(e.nativeEvent.layout.width)}
      style={[
        contentContainerStyle,
        { backgroundColor: surfaceColor },
      ]}
    >
      {props.children}
    </View>
    {Boolean(bottom) && typeof width == 'number' && <ZigzagLines
      {...zigzagProps}
      width={width}
      position="bottom"
      backgroundColor={backgroundColor}
      color={surfaceColor}
    />}
  </View>
}

export default ZigzagView