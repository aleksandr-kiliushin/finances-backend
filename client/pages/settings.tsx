import { useEffect, useState } from 'react'

// Components
import { Header } from '#comp-by-page/settings/header'
import { InputRow } from '#comp-by-page/settings/input-row'
import { Row } from '#comp-by-page/settings/row'

// Styles
import s from '#comp-by-page/settings/index.module.css'

// Types
import { IFinanceCategory } from '#interfaces/finance'

export default function Settings() {
	const [isAddCategoryRowShown, setIsAddCategoryRowShown] = useState(false)

	const [financeCategories, setFinanceCategories] = useState<IFinanceCategory[]>([])

	useEffect(() => {
		fetch('api/finance-record?isTrashed=false&orderingByDate=DESC&orderingById=DESC', {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYXNoYSIsImlhdCI6MTYzMzQ1Nzk4OCwiZXhwIjoxNjM0MzIxOTg4fQ.aREJJltS80P33yfzdIeLIqyW3_LCpeVNC5imu1Akwo0',
			},
		})
			.then(response => response.json())
			.then(records => setFinanceCategories(records))
	}, [])

	return (
		<>
			<h2>finance categories</h2>

			<div className={s.Table}>
				<Header
					toggleIsAddCategoryRowShown={() => setIsAddCategoryRowShown(!isAddCategoryRowShown)}
				/>

				{isAddCategoryRowShown && (
					<InputRow closeInputRow={() => setIsAddCategoryRowShown(false)} category={null} />
				)}

				{financeCategories.map(category => (
					<Row category={category} key={category.id} />
				))}
			</div>
		</>
	)
}
