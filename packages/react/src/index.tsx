import { ComponentProps } from 'react'
import { colors } from '@ignite-ui/tokens'
import { styled } from './styles'

export function App() {
  return <h1 style={{ color: colors.gray100 }}></h1>
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray100',
  borderRadius: '$lg',
  width: '$12',
  height: '$12',

  // variants: {
  //   size: {

  //   }
  // }
})

export type ButtonProps = ComponentProps<typeof Button>
