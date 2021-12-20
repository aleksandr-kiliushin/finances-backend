import { ReactNode } from 'react'
import { css, SerializedStyles } from '@emotion/react'

export const TableHeader = ({ children, tableHeaderCustomCss }: IProps) => {
  return (
    <div
      css={css`
        padding: 0.5rem 1rem;
        background: var(--color-theme-1-light);
        ${tableHeaderCustomCss}
      `}
    >
      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
  tableHeaderCustomCss?: SerializedStyles
}
