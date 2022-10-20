import { X } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Text } from '../Text'
import { CloseIcon, ToastContainer } from './styles'

export interface ToastProps {
  open: boolean
}

export function Toast({ open = false }: ToastProps) {
  const [close, setCloseToast] = useState(false)

  const showToast = useCallback(() => {
    if (open && !close) {
      return true
    } else if (open && close) {
      return false
    } else {
      return false
    }
  }, [close, open])

  return (
    <>
      {showToast() && (
        <ToastContainer>
          <Text>Toast</Text>

          <CloseIcon role="button" onClick={() => setCloseToast(true)}>
            <X />
          </CloseIcon>
        </ToastContainer>
      )}
    </>
  )
}
