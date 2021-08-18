import { useState } from 'react'
import { useQuery } from '@apollo/client'

// gql
import {
	GET_FINANCE_RECORDS,
	IGetFinanceRecordsData,
	IGetFinanceRecordsVars,
} from '#gql/get-finance-records.query'

// components
import { Header } from '#comp-by-page/finance/records-table/header'
import { InputRow } from '#comp-by-page/finance/records-table/input-row'
import { Row } from '#comp-by-page/finance/records-table/row'

// styles
import s from '#comp-by-page/finance/records-table/index.module.css'

export default function Records() {
	const [isAddRecordRowShown, setIsAddRecordRowShown] = useState(false)

	const { data } = useQuery<IGetFinanceRecordsData, IGetFinanceRecordsVars>(GET_FINANCE_RECORDS, {
		variables: { isTrashed: false },
	})

	if (!data) return null

	const { financeRecords } = data

	return (
		<div className={s.Table}>
			<Header
				isTrash={false}
				toggleIsAddRecordRowShown={() => setIsAddRecordRowShown(!isAddRecordRowShown)}
			/>

			{isAddRecordRowShown && (
				<InputRow closeInputRow={() => setIsAddRecordRowShown(false)} record={null} />
			)}

			{financeRecords.map(record => (
				<Row key={record.id} record={record} />
			))}
		</div>
	)
}

// props typing
// interface PostNextPageContext extends NextPageContext {
// 	query: {
// 		id: string
// 	}
// }

// Post.getInitialProps = async ({query,req}: PostNextPageContext) => {
//   console.log(query.id)
//   return {

//   }
// }
