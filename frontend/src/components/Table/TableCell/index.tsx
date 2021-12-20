import { ReactNode } from 'react'
import { css, SerializedStyles } from '@emotion/react'

export const TableCell = ({ children, tableCellCustomCss, onClick = () => {} }: IProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        svg {
          height: 40px;
          width: 40px;
          padding: 6px;
        }
        ${tableCellCustomCss}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
  onClick?: () => void
  tableCellCustomCss?: SerializedStyles
}
