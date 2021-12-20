import { ReactNode } from 'react'
import { css } from '@emotion/react'

export const ModalBody = ({ children }: IProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 15px;
      `}
    >
      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
}
