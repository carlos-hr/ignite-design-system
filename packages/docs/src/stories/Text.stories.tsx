import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@chr-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere magni itaque repellat. Perferendis, amet velit maiores esse voluptatem modi distinctio aliquam cupiditate voluptate, itaque illum exercitationem reiciendis perspiciatis beatae.',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Custom: StoryObj<TextProps> = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
}
