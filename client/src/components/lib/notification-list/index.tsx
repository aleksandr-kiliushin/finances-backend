import { useReactiveVar } from '@apollo/client'

// Components
import { Notification } from './notification'

// Styles
import s from './index.module.css'
import { notificationsVar } from '#models/cache'

export const NotificationList = () => {
	const notifications = useReactiveVar(notificationsVar)

	if (notifications.length === 0) return null

	return (
		<div className={s.NotificationList}>
			{notifications.map((notification) => {
				return <Notification key={notification.id} notificationData={notification} />
			})}
		</div>
	)
}
