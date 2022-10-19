import { Info } from 'phosphor-react'
import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'
import {
  TooltipArrow,
  TooltipProvider,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger>
          <Info size={16} color="white" />
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props}>
            <Text>{props.children}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
