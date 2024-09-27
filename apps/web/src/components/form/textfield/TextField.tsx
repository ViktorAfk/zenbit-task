import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type FieldName = 'email' | 'password';
type FormFields = Record<FieldName, string>;

type Props = {
  fieldName: FieldName;
  register: UseFormRegister<FormFields>;
  errorMessage: string | undefined;
  labelName: string;
  attributeLabelName: string;
  restInputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  restLabelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
};
export const TextField: React.FC<Props> = ({
  register,
  errorMessage,
  labelName,
  attributeLabelName,
  restLabelProps,
  restInputProps,
  fieldName,
}) => {
  return (
    <div>
      <label
        className="label merriweather-bold"
        {...restLabelProps}
        htmlFor={attributeLabelName}
      >
        {labelName}
      </label>
      <input
        className="input lato-regular"
        {...restInputProps}
        {...register(fieldName)}
        type="text"
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
