import React, { forwardRef, ForwardedRef } from 'react'

import s from './index.module.css'

export const Loader = forwardRef((props: {}, ref: ForwardedRef<HTMLDivElement>) => {
  return <div className={s.Loader} ref={ref} />
})
