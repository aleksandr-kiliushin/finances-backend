import { css } from '@emotion/react'

export enum Color {
  Secondary = '#6b7b8c',
  Primary = '#3b4d61',
  Theme = '#ef9d10',
}

const globalStyles = css`
  html,
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

export default globalStyles
