import { ReactNode } from 'react'
import FormLabel from '@mui/material/FormLabel'

export const FormRow = ({ children, label, name }: Props) => {
  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      {children}
    </div>
  )
}

interface Props {
  children: ReactNode
  label: ReactNode
  name: string
}
