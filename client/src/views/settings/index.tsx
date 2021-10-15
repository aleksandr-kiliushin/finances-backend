import React, { useEffect, useState } from 'react'

// Components
// import { Table } from '#components/Table'
// import { Header } from '#components/by-page/settings/header'
// import { InputRow } from '#components/by-page/settings/input-row'
// import { Row } from '#components/by-page/settings/row'

export const Settings = () => {
	const [categories, setCategories] = useState([])
	const [categoryTypes, setCategoryTypes] = useState([])

	useEffect(() => {
		const options = {
			headers: {
				Authorization: 'Bearer ' + localStorage.authToken,
				'Content-Type': 'application/json',
			},
		}

		fetch('api/finance-category', options)
			.then((response) => response.json())
			.then((categories) => setCategories(categories))

		fetch('api/finance-category-type', options)
			.then((response) => response.json())
			.then((categoryTypes) => setCategoryTypes(categoryTypes))
	}, [])

	return (
		<>
			<h2>Finance categories</h2>

			{/* <Table></Table> */}

			{/* <div className={s.Table}>
				<Header
					toggleIsAddCategoryRowShown={() => setIsAddCategoryRowShown(!isAddCategoryRowShown)}
				/>

				{isAddCategoryRowShown && (
					<InputRow closeInputRow={() => setIsAddCategoryRowShown(false)} category={null} />
				)}

				{data?.financeCategories.map((category) => (
					<Row category={category} key={category.id} />
				))}
			</div> */}
		</>
	)
}
