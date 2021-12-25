import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Form from '#components/form-constructor/Form'
import { logIn, logOut } from '#models/user'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'
import { useAppDispatch, useAppSelector } from '#utils/hooks'

import { Container } from './components'
import { FormField, FormValues } from './form-helpers'

export const Login = () => {
  const dispatch = useAppDispatch()

  const { isUserLoggedIn, userData } = useAppSelector((state) => state.user)

  const {
    formState: { isValid },
    handleSubmit,
    register,
  } = useForm<FormValues>({ mode: 'onChange' })

  const onSubmit = handleSubmit(({ password, username }) => {
    dispatch(logIn({ password, username }))
  })

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
      <Form onSubmit={onSubmit}>
        <FormRow label="Username" name={FormField.Username}>
          <PlainInput {...register(FormField.Username, { required: true })} />
        </FormRow>
        <FormRow label="Password" name={FormField.Password}>
          <PlainInput type="password" {...register(FormField.Password, { required: true })} />
        </FormRow>
        <Button disabled={!isValid} type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  )
}
