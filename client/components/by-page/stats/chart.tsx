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
