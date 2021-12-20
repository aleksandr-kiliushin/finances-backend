import { css } from '@emotion/react'

export const inputStyle = css`
  height: 35px;
  padding: 0 10px;
  background-color: white;
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  outline: none;
  &:focus {
    outline-color: var(--color-theme-1);
    outline-width: 1px;
    outline-style: solid;
  }
`
