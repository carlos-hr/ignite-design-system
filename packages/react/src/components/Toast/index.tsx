import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  open: boolean
}

export function Toast(props: ToastProps) {
  return (
    <ToastProvider duration={3000}>
      <ToastRoot {...props}>
        <ToastTitle>Toast Title</ToastTitle>
        <ToastDescription />
        <ToastAction />
        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}
