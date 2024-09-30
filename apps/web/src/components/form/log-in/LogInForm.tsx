import React from 'react';
import './LogIn-form.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { logUser } from '../../../api/auth';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hook';
import { selectToken, setAuthToken } from '../../../state/features/authSlice';
import { FormButton } from '../../ui/Buttons/form-button/FormButton';
import { TextField } from '../textfield/TextField';
import { schema } from '../validation';

const LogInSchema = schema.pick(['email', 'password']);
type SingInFormFields = yup.InferType<typeof LogInSchema>;

export const LogInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingInFormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LogInSchema),
  });

  const onHandleSubmit = async (data: SingInFormFields) => {
    console.log(data);
    const token = await logUser(data);
    if (!token) {
      console.log('Oops!Something went wrong');
    }

    dispatch(setAuthToken(token));
    reset();
  };

  console.log(token);

  return (
    <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="textfield-container">
        <TextField
          fieldName="email"
          labelName="Email"
          errorMessage={errors.email?.message}
          register={register}
          attributeLabelName="email"
        />
        <TextField
          fieldName="password"
          labelName="Password"
          errorMessage={errors.password?.message}
          register={register}
          attributeLabelName="password"
        />
      </div>
      <div className="form-link__container">
        <Link className="form-link lato-bold" to={'authorization/sign-up'}>
          Forgot password?
        </Link>
      </div>
      <div className="form-button--modification">
        <FormButton type="submit" disabled={isSubmitting}>
          Sign In
        </FormButton>
      </div>
      <div className="sign-up-link__container">
        <p>
          Don’t have account?{' '}
          <span>
            <Link className="form-link lato-bold" to={'authorization/sign-up'}>
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </form>
  );
};
