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

		const { financeRecords } = data

		const startDate = new Date(financeRecords[financeRecords.length - 1].date)
		const endDate = new Date()

		const mapSumToDate: Record<string, number> = {}

		const currentDate = startDate
		let currentSum = 1_277_000
		while (currentDate <= endDate) {
			const stringifiedCurrentDate = currentDate.toISOString().split('T')[0]

			currentSum = financeRecords
				.filter(record => record.date === stringifiedCurrentDate)
				.reduce((dateSum, record) => {
					if (record.category.type.name === 'expense') {
						return (dateSum -= record.amount)
					}
					return (dateSum += record.amount)
				}, currentSum)

			mapSumToDate[stringifiedCurrentDate] = currentSum

			currentDate.setDate(currentDate.getDate() + 1)
		}

		const maxSum = Math.max.apply(
			Math,
			financeRecords.map(record => record.amount),
		)

		const canvas = canvasRef.current as HTMLCanvasElement | null

		if (canvas === null) return

		const ctx = canvas.getContext('2d')

		if (ctx === null) return

		const xMultiplier = ctx.canvas.clientWidth / Object.keys(mapSumToDate).length
		const yMultiplier = ctx.canvas.clientHeight / maxSum

		ctx.beginPath()
		ctx.moveTo(0, currentSum * yMultiplier * 0.01)
		Object.values(mapSumToDate).forEach((sum, index) => {
			ctx.lineTo(index * xMultiplier, sum * yMultiplier * 0.01)
		})
		ctx.stroke()
	}, [data])

	if (!data) return null

	return <canvas className={s.Chart} ref={canvasRef} style={{ border: '1px solid black' }} />
}
