import React, { FC } from 'react';
import { TextField } from './styles';

export interface Props {
  name: string;
  type: string;
  placeholder: string;
}
/**
 * Text input form control
 *@function Input
 *@param {string} name - label && input name
 *@param {string} type - input type
 *@param {string} placeholder - input placeholder
 *@returns {JSX.Element} - Rendered Form text control element
 */
const Input: FC<Props> = ({ name, type, placeholder }) => {
  //TODO: Move placeholder on top after typing
  //TODO: implement value and onChange props
  return (
    <TextField>
      <label htmlFor={name}>
        <input type={type} name={name} placeholder={placeholder} />
      </label>
    </TextField>
  );
};

export default Input;
