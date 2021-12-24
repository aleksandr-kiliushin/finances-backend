import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { logIn, logOut } from '#models/user'
import { Form } from '#components/form-constructor/Form'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'
import { useAppDispatch, useAppSelector } from '#utils/hooks'
import { IUser } from '#interfaces/user'

import { Container } from './components'

export const Login = () => {
  const dispatch = useAppDispatch()

  const { isUserLoggedIn, userData } = useAppSelector((state) => state.user)

  const {
    formState: { isValid },
    handleSubmit,
    register,
  } = useForm<FormValues>({ mode: 'onChange' })

  const submitLogin: SubmitHandler<FormValues> = ({ password, username }) => {
    dispatch(logIn({ password, username }))
  }

  if (isUserLoggedIn) {
    return (
      <Container>
        <Typography textAlign="center">
          You are logged in as <b>{userData.username}</b>.
        </Typography>
        <Button onClick={() => dispatch(logOut())}>Log out</Button>
      </Container>
    )
  }

  return (
    <Container>
      <Typography textAlign="center" variant="h1">
        Welcome
      </Typography>
      <Form onSubmit={handleSubmit(submitLogin)}>
        <FormRow label="Username" name="username">
          <PlainInput {...register('username', { required: true })} />
        </FormRow>
        <FormRow label="Password" name="password">
          <PlainInput type="password" {...register('password', { required: true })} />
        </FormRow>
        <Button disabled={!isValid} type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  )
}

type FormValues = Pick<IUser, 'password' | 'username'>
