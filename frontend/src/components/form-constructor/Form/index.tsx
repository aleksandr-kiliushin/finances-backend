import { DetailedHTMLProps, FormHTMLAttributes } from 'react'

export const Form = ({ children, ...rest }: IProps) => {
  return (
    <form className="{s.Form}" {...rest}>
      {children}
    </form>
  )
}

type IProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

// .Form {
//   display: flex;
//   flex-direction: column;
//   row-gap: 15px;
// }
