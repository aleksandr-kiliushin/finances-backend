// Components
import { Notification } from './notification'

// Styles
import s from './index.module.css'

// Types
import { INotification } from '#models/cache'

export const NotificationList = ({}: IProps) => {
	const notifications: INotification[] = [
		{
			id: 1,
			message: <div>New record added successfully.</div>,
			title: <h3>Record added</h3>,
			type: 'success',
		},
		{
			id: 2,
			message: <div>Invalid username or password.</div>,
			title: <h3>Authentication error</h3>,
			type: 'error',
		},
		{
			id: 3,
			message: <div>New category added successfully.</div>,
			title: <h3>Category added</h3>,
			type: 'success',
		},
	]

	return (
		<div className={s.NotificationList}>
			{notifications.map((notification) => {
				return <Notification key={notification.id} notificationData={notification} />
			})}
		</div>
	)
}

interface IProps {}
