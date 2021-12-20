import { forwardRef, ForwardedRef } from 'react'
import { css } from '@emotion/react'

export const Loader = forwardRef((props: {}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      css={css`
        height: 20px;
      `}
      ref={ref}
    />
  )
})
