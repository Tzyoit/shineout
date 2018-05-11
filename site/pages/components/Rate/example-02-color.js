/**
 * cn - 颜色
 *    -- 创建函数时设置颜色
 * en - Icon color
 */
import React from 'react'
import { Rate } from 'shineout'
import FontAwesome from '../Icon/FontAwesome'

const heartBg = <FontAwesome name="heart-o" />
const heart = <FontAwesome name="heart" style={{ color: '#ff4d4f' }} />
const HeartRate = Rate(heartBg, heart)

export default function () {
  return (
    <HeartRate />
  )
}