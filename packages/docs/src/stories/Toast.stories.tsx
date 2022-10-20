import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@chr-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Surfaces/ Toast',
  component: Toast,
  args: {},

  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button onClick={() => setOpen(true)}>Show toast</Button>
          <Toast open={open} />
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    children: 'this is a Toast!',
  },
}
