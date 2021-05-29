import React from 'react'
import { ColorValue, StyleProp, ViewProps, ViewStyle } from 'react-native'
import { ZigzagLinesProps } from 'react-native-zigzag-lines'

export interface ZigzagViewProps extends ViewProps {
  contentContainerStyle?: StyleProp<ViewStyle>
  surfaceColor?: ColorValue
  backgroundColor?: ColorValue
  zigzagProps?: Omit<ZigzagLinesProps, 'color' | 'backgroundColor' | 'width' | 'position'>
  top?: boolean
  bottom?: boolean
}

declare const ZigzagView: React.FC<ZigzagViewProps>

export default ZigzagView