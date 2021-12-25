import { ElementType, forwardRef, ForwardedRef } from 'react'
import { css } from '@emotion/react'

export const Loader = forwardRef(({ Component }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Component
      css={css`
        height: 20px;
      `}
      ref={ref}
    />
  )
})

interface Props {
  Component: ElementType
}
