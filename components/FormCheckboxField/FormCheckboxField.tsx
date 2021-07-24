import React, { FC } from 'react';
import * as Styled from './styles.FormCheckboxField';

export interface Props {
  name: string;
  disabled?: boolean;
  checked: boolean;
  setChecked: () => void;
  required?: boolean;
  labelText: string;
}
/**
 * Checkbox input form control
 *@function Input
 *@param {string} name - label && input name
 *@param {boolean} checked - label && input name
 *@param {function} setChecked - setter from useState to control value
 *@param {boolean} required - is required, default to false
 *@returns {JSX.Element} - Rendered Form text control element
 */
const FormCheckboxField: FC<Props> = ({
  name,
  checked,
  setChecked,
  required = false,
  disabled,
  labelText,
}) => {
  return (
    <>
      <Styled.Label htmlFor={name} onClick={() => setChecked()}>
        <Styled.Input
          type="checkbox"
          name={name}
          defaultChecked={checked}
          required={required}
          className="check__input"
          disabled={disabled}
          // here we use key to dynamically re-render, this is hacky, will fix later
          key={name + checked}
        />
        <Styled.CheckBox className="check__box" />

        {labelText}
      </Styled.Label>
    </>
  );
};

export default FormCheckboxField;
