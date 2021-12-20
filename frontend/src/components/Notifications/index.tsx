import { css } from '@emotion/react'

// import { Notification } from './Notification'

export const NotificationList = () => {
  const notifications: [] = []

  if (notifications.length === 0) return null

  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
        width: calc(100vw - 1rem);
        margin: 0.5rem;
      `}
    >
      {/* {notifications.map((notification) => {
				return <Notification key={notification.id} notificationData={notification} />
			})} */}
    </div>
  )
}
