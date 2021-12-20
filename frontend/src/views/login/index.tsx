import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { logIn, logOut } from '#models/user'
import { Form } from '#components/form-constructor/Form'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'
import { Button } from '#components/Button'
import { useAppDispatch, useAppSelector } from '#utils/hooks'
import { IUser } from '#interfaces/user'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 25px;
  height: 100%;
  padding: 3rem;
`

export const Login = () => {
  const dispatch = useAppDispatch()

  const { isUserLoggedIn, userData } = useAppSelector((state) => state.user)

  const {
    formState: { isValid },
    handleSubmit,
    register,
  } = useForm<IFormValues>({ mode: 'onChange' })

  const submitLogin: SubmitHandler<IFormValues> = ({ password, username }) => {
    dispatch(logIn({ password, username }))
  }

  if (isUserLoggedIn) {
    return (
      <Container>
        <p
          css={css`
            text-align: center;
          `}
        >
          You are logged in as <b>{userData.username}</b>.
        </p>

        <Button color="danger" onClick={() => dispatch(logOut())}>
          Log out
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <h1
        css={css`
          text-align: center;
        `}
      >
        Welcome
      </h1>

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

type IFormValues = Pick<IUser, 'password' | 'username'>
