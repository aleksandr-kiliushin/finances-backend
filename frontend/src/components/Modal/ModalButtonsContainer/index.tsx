import { ReactNode } from 'react'
import { css } from '@emotion/react'

export const ModalButtonsContainer = ({ children }: IProps) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
      `}
    >
      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
}
