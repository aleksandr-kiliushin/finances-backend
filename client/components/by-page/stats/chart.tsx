import { useEffect, useRef } from 'react'

// gql
import { getFinanceRecordsQuery } from '#gql/get-finance-records.query'

// style
import s from './chart.module.css'

export const Chart = () => {
	const { data } = getFinanceRecordsQuery({
		variables: { isTrashed: false },
	})

	const canvasRef = useRef(null)

	useEffect(() => {
		if (!data) return

		const firstMaySum = 1_277_000

		const canvas = canvasRef.current as HTMLCanvasElement | null

		if (canvas === null) return

		const context = canvas.getContext('2d')

		if (context === null) return

		context.fillStyle = '#000000'
		context.fillRect(0, 0, context.canvas.width, context.canvas.height)
	}, [data])

	if (!data) return null

	return <canvas className={s.Chart} ref={canvasRef} />
}
