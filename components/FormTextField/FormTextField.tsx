import React, { FC } from 'react';
import { TextField } from './styles';

export interface Props {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
}
/**
 * Text input form control
 *@function Input
 *@param {string} name - label && input name
 *@param {string} type - input type
 *@param {string} placeholder - input placeholder
 *@returns {JSX.Element} - Rendered Form text control element
 */
const Input: FC<Props> = ({
  name,
  type,
  placeholder,
  value,
  setValue,
  required = false,
}) => {
  //TODO: Move placeholder on top after typing
  //TODO: implement value and onChange props
  return (
    <TextField>
      <label htmlFor={name}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />
      </label>
    </TextField>
  );
};

export default Input;
