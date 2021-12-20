import { ReactNode } from 'react'

export const FormRow = ({ children, label, name }: IProps) => {
  return (
    <div className="{s.FormRow}">
      <label htmlFor={name} className="{s.Label}">
        {label}
      </label>

      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
  label: ReactNode
  name: string
}

// .FormRow {
//   display: flex;
//   flex-direction: column;
//   row-gap: 5px;
// }

// .Label {
//   color: var(--gray);
//   font-size: 1rem;
// }
