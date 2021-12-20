import { css } from '@emotion/react'

export const Notification = ({ notificationData }: IProps) => {
  const { message, title, type } = notificationData

  const mapNotificationTypeToBackgroundColor = {
    error: 'lightsalmon',
    success: 'rgb(182, 218, 128)',
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        padding: 1rem;
        background-color: ${mapNotificationTypeToBackgroundColor[type]};
        border: 1px solid var(--soft-black);

        h4,
        p {
          margin: 0;
        }
      `}
    >
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  )
}

interface IProps {
  notificationData: {
    id: number
    message: string
    title: string
    type: 'error' | 'success'
  }
}
