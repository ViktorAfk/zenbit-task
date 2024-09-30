import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormButton } from '../../ui/Buttons/form-button/FormButton';
import { TextField } from '../textfield/TextField';
import './Sign-up-form.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../api/auth';
import { useAppDispatch } from '../../../hooks/redux-hook';
import { setAuthToken } from '../../../state/features/authSlice';
import { schema } from '../validation';

type SingUpFormFields = yup.InferType<typeof schema>;

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const onHandleSubmit = async (data: SingUpFormFields) => {
    const omittedData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const accessData = await registerUser(omittedData);
    if (accessData.access_token) {
      dispatch(setAuthToken(accessData));
      reset();
      navigate('/deals');
    }
    console.log(accessData);
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
