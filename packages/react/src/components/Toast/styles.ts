import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

export const ToastContainer = styled('div', {
  position: 'absolute',
  backgroundColor: '$gray800',
  width: '$40',
  height: '$16',
  borderRadius: '$sm',
  padding: '$2',
  display: 'flex',
  justifyContent: 'space-between',

  variants: {
    position: {
      'bottom-left': {
        bottom: 20,
        left: 20,
        animation: `${slideIn}`,
      },
      'bottom-right': {
        bottom: 20,
        right: 20,
        animation: `${slideIn}`,
      },
      'top-left': {
        top: 20,
        left: 20,
        animation: `${slideIn}`,
      },
      'top-right': {
        top: 20,
        right: 20,
        animation: `${slideIn} 200ms ease-out`,
      },
    },
  },

  defaultVariants: {
    position: 'top-right',
  },
})

export const CloseIcon = styled('div', {
  svg: {
    color: '$gray100',
  },
})
