import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { logIn, logOut } from '#models/user'
import { Form } from '#components/form-constructor/Form'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'
import { Button } from '#components/Button'
import { useAppDispatch, useAppSelector } from '#utils/hooks'
import s from './index.module.css'
import { IUser } from '#interfaces/user'

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
      <div className={s.Container}>
        <p className={s.Centered}>
          You are logged in as <strong>{userData.username}</strong>.
        </p>

        <Button color="danger" onClick={() => dispatch(logOut())}>
          Log out
        </Button>
      </div>
    )
  }

  return (
    <div className={s.Container}>
      <h1 className={s.Centered}>Welcome</h1>

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
    </div>
  )
}

type IFormValues = Pick<IUser, 'password' | 'username'>
