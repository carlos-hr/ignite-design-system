import type { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@chr-ignite-ui/react'

export default {
  title: 'Surfaces/ Tooltip',
  component: Tooltip,
  args: {},

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: 'this is a tooltip!',
  },
}
