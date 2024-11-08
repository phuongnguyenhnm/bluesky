import React from 'react'
import {StyleProp, ViewStyle} from 'react-native'
import Animated, {FadeInDown, FadeOutDown} from 'react-native-reanimated'

import {atoms as a, native, useTheme} from '#/alf'
import {Text} from '#/components/Typography'

/**
 * Absolutely positioned time indicator showing how many seconds are remaining
 * Time is in seconds
 */
export function TimeIndicator({
  time,
  style,
}: {
  time: number
  style?: StyleProp<ViewStyle>
}) {
  const t = useTheme()

  if (isNaN(time)) {
    return null
  }

  const minutes = Math.floor(time / 60)
  const seconds = String(time % 60).padStart(2, '0')

  return (
    <Animated.View
      entering={native(FadeInDown.duration(300))}
      exiting={native(FadeOutDown.duration(500))}
      pointerEvents="none"
      style={[
        {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 3,
          left: 6,
          bottom: 6,
          minHeight: 21,
        },
        a.absolute,
        a.justify_center,
        style,
      ]}>
      <Text
        style={[
          {color: t.palette.white, fontSize: 12, fontVariant: ['tabular-nums']},
          a.font_bold,
          {lineHeight: 1.25},
        ]}>
        {`${minutes}:${seconds}`}
      </Text>
    </Animated.View>
  )
}