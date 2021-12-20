import { ReactNode } from 'react'
import { SerializedStyles } from '@emotion/react'

export const ModalHeader = ({ children, modalHeaderCustomCss }: IProps) => {
  return <div css={modalHeaderCustomCss}>{children}</div>
}

interface IProps {
  children: ReactNode
  cnModalHeader?: string
  modalHeaderCustomCss?: SerializedStyles
}
