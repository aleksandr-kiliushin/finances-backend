import { useState } from 'react'

// Fetching
import { useGetFinanceCategoriesQuery } from '#models/fetching/get-finance-categories.query'

// Components
import { Header } from '#components/by-page/settings/header'
import { InputRow } from '#components/by-page/settings/input-row'
import { Row } from '#components/by-page/settings/row'

// Styles
import s from '#components/by-page/settings/index.module.css'

export default function Settings() {
	const [isAddCategoryRowShown, setIsAddCategoryRowShown] = useState(false)

	const { data } = useGetFinanceCategoriesQuery()

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

				{data?.financeCategories.map((category) => (
					<Row category={category} key={category.id} />
				))}
			</div>
		</>
	)
}
