import React, { forwardRef } from 'react'

// Styles
import s from './index.module.css'

// Types
import { ForwardedRef } from 'react'

export const Loader = forwardRef((props: {}, ref: ForwardedRef<HTMLDivElement>) => {
	return <div className={s.Loader} ref={ref} />
})
