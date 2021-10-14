// Fetching
import { useNotificationsQuery } from '#models/fetching/notifications.query'

// Components
import { Notification } from './notification'

// Styles
import s from './index.module.css'

export const NotificationList = () => {
	const { data } = useNotificationsQuery()

	if (!data?.notifications.length) return null

	return (
		<div className={s.NotificationList}>
			{data.notifications.map((notification) => {
				return <Notification key={notification.id} notificationData={notification} />
			})}
		</div>
	)
}
