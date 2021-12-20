import { ReactNode } from 'react'
import { css, SerializedStyles } from '@emotion/react'

export const TableRow = ({ children, tableRowCustomCss, isTableHeaderRow = false }: IProps) => {
  return (
    <div
      css={css`
        display: grid;
        height: 40px;
        margin-top: -1px;
        border-bottom: 1px solid var(--color-theme-1);
        border-top: 1px solid var(--color-theme-1);
        ${isTableHeaderRow && `font-weight: 500;`}
        ${tableRowCustomCss}
      `}
    >
      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
  isTableHeaderRow?: boolean
  tableRowCustomCss?: SerializedStyles
}
