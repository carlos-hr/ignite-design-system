import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  border: 0,
  background: 'transparent',
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$2',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {})
