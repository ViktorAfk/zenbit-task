import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import './Textfield.css';

type Props<T extends FieldValues> = {
  fieldName: Path<T>;
  register: UseFormRegister<T>;
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

export const TextField = <T extends FieldValues>({
  register,
  errorMessage,
  labelName,
  attributeLabelName,
  restLabelProps,
  restInputProps,
  fieldName,
}: Props<T>) => {
  return (
    <div className="text-field">
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
        placeholder={labelName}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
