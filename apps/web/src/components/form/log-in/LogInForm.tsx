import React from 'react';
import './LogIn-form.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { FormButton } from '../../ui/Buttons/form-button/FormButton';
import { TextField } from '../textfield/TextField';
import { schema } from './validation';

type SingInFormFields = yup.InferType<typeof schema>;

export const LogInForm: React.FC = () => {
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
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: SingInFormFields) => {
    console.log(data);
  };

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
        <Link className="form-link lato-bold" to={'#'}>
          Forgot password?
        </Link>
      </div>
      <FormButton type="submit">Sign In</FormButton>
    </form>
  );
};
