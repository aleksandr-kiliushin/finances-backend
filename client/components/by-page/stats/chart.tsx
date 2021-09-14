import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

// gql
import { getFinanceRecordsQuery } from '#gql/get-finance-records.query'

// style
import s from './chart.module.css'

export const Chart1 = () => {
	const { data } = getFinanceRecordsQuery({
		variables: {
			isTrashed: false,
			orderingByDate: 'ASC',
			orderingById: 'ASC',
		},
	})

	const canvasRef = useRef(null)

	useEffect(() => {
		// if (!data) return

		// const { financeRecords } = data

		// const startDate = new Date(financeRecords[0].date)
		// const endDate = new Date()
		// const mapSumToDate: Record<string, number> = {}

		// const currentDate = startDate
		// let currentSum = 1_277_000
		// while (currentDate <= endDate) {
		// 	const stringifiedCurrentDate = currentDate.toISOString().split('T')[0]

		// 	currentSum = financeRecords
		// 		.filter(record => record.date === stringifiedCurrentDate)
		// 		.reduce((dateSum, record) => {
		// 			if (record.category.type.name === 'expense') {
		// 				return (dateSum -= record.amount)
		// 			}
		// 			return (dateSum += record.amount)
		// 		}, currentSum)

		// 	mapSumToDate[stringifiedCurrentDate] = currentSum

		// 	currentDate.setDate(currentDate.getDate() + 1)
		// }

		// const maxSum = Math.max.apply(
		// 	Math,
		// 	financeRecords.map(record => record.amount),
		// )
		// const canvas = canvasRef.current as HTMLCanvasElement | null

		// if (canvas === null) return

		// const ctx = canvas.getContext('2d')

		// if (ctx === null) return

		// const xMultiplier = ctx.canvas.clientWidth / Object.keys(mapSumToDate).length
		// const yMultiplier = ctx.canvas.clientHeight / maxSum

		// ctx.beginPath()
		// ctx.moveTo(0, currentSum * yMultiplier * 0.01)
		// Object.values(mapSumToDate).forEach((sum, index) => {
		// 	ctx.lineTo(index * xMultiplier, sum * yMultiplier * 0.01)
		// })
		// ctx.stroke()

		if (!data) return
		const { financeRecords } = data

		const canvas = canvasRef.current as HTMLCanvasElement | null

		if (canvas === null) return

		const ctx = canvas.getContext('2d')

		if (ctx === null) return

		Chart.register(...registerables)

		const endDate = new Date()
		const mapSumToDate: {
			x: string
			y: number
		}[] = []

		const currentDate = new Date(financeRecords[0].date)
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

			mapSumToDate.push({
				x: stringifiedCurrentDate,
				y: currentSum,
			})

			currentDate.setDate(currentDate.getDate() + 1)
		}

		new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [
					{
						backgroundColor: 'rgba(0, 100, 0, 0.5)',
						borderColor: 'darkgreen',
						borderWidth: 1,
						data: Object.values(mapSumToDate),
						fill: true,
						label: 'Your finance, RUB',
						pointBorderColor: 'darkgreen',
						pointRadius: 0,
					},
				],
			},
			options: {
				scales: {
					x: {
						ticks: {
							callback: tickValue => {
								if (typeof tickValue !== 'number') return 'error'

								const timeStamp = new Date(financeRecords[0].date).setDate(
									currentDate.getDate() + tickValue,
								)

								return new Date(timeStamp).toLocaleString('default', {
									month: 'short',
									year: '2-digit',
								})
							},
							maxRotation: 90,
							minRotation: 90,
						},
					},
					y: {
						beginAtZero: true,
						ticks: {
							callback: tickValue =>
								typeof tickValue === 'number' ? tickValue / 1_000_000 : 'error',
							padding: 1,
						},
					},
				},
			},
		})
	}, [data])

	if (!data) return null

	return <canvas className={s.Chart} ref={canvasRef} />
}
