import { useState } from 'react'

// gql
import { getFinanceCategoriesQuery } from '#gql/get-finance-categories.query'

// styles
import s from '#comp-by-page/settings/index.module.css'
import { Header } from '#comp-by-page/settings/header'
import { InputRow } from '#comp-by-page/settings/input-row'
import { Row } from '#comp-by-page/settings/row'

export default function Settings() {
	const [isAddCategoryRowShown, setIsAddCategoryRowShown] = useState(false)

	const { data } = getFinanceCategoriesQuery()

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

				{data?.financeCategories.map(category => (
					<Row category={category} key={category.id} />
				))}
			</div>
		</>
	)
}
