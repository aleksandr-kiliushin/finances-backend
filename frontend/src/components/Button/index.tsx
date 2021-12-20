import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { css, SerializedStyles } from '@emotion/react'

export const Button = ({ color = 'primary', customButtonCss, ...rest }: IProps) => {
  const mapButtonTypeToBackgroundColor = {
    danger: 'var(--color-theme-1)',
    light: 'var(--soft-danger)',
    primary: 'var(--color-theme-1-light)',
  }
  const mapButtonTypeToColor = {
    danger: 'white',
    light: 'white',
    primary: 'var(--soft-black)',
  }

  return (
    <button
      css={css`
        height: 35px;
        padding: 0 10px;
        background-color: ${mapButtonTypeToBackgroundColor[color]};
        border: none;
        border-radius: 5px;
        color: ${mapButtonTypeToColor[color]};
        &:disabled {
          color: var(--lightgray);
        }
        border: ${color === 'light' ? '1px solid var(--color-theme-1)' : 'none'};
        ${customButtonCss}
      `}
      {...rest}
    />
  )
}

type IProps = {
  children: ReactNode
  color?: 'danger' | 'light' | 'primary'
  customButtonCss?: SerializedStyles
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
