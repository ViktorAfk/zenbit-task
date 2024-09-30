import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormButton } from '../../ui/Buttons/form-button/FormButton';
import { TextField } from '../textfield/TextField';
import './Sign-up-form.css';
import { schema } from '../validation';

type SingUpFormFields = yup.InferType<typeof schema>;

export const SignUpForm: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingUpFormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: SingUpFormFields) => {
    console.log(data);
  };
  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="textfield-container">
        <TextField
          errorMessage={errors.name?.message}
          labelName="Name"
          fieldName="name"
          attributeLabelName="name"
          register={register}
        />
        <TextField
          errorMessage={errors.email?.message}
          labelName="Email"
          fieldName="email"
          attributeLabelName="email"
          register={register}
        />
        <TextField
          errorMessage={errors.password?.message}
          labelName="Password"
          fieldName="password"
          attributeLabelName="password"
          register={register}
        />
        <TextField
          errorMessage={errors.confirmPassword?.message}
          labelName="Confirm password"
          fieldName="confirmPassword"
          attributeLabelName="confirmPassword"
          register={register}
        />
      </div>
      <FormButton type="submit" disabled={isSubmitting}>
        Sign Up
      </FormButton>
    </form>
  );
};
