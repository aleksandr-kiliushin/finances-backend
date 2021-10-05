import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

// Style
import s from './chart.module.css'

// Types
import { IFinanceRecord } from '#interfaces/finance'

export const Chart1 = () => {
	const canvasRef = useRef(null)

	useEffect(() => {
		fetch('api/finance-record?isTrashed=false&orderingByDate=ASC&orderingById=ASC', {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYXNoYSIsImlhdCI6MTYzMzQ1Nzk4OCwiZXhwIjoxNjM0MzIxOTg4fQ.aREJJltS80P33yfzdIeLIqyW3_LCpeVNC5imu1Akwo0',
			},
		})
			.then(response => response.json() as Promise<IFinanceRecord[]>)
			.then(financeRecords => {
				if (!financeRecords) return

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
			})
	}, [])

	return <canvas className={s.Chart} ref={canvasRef} />
}
