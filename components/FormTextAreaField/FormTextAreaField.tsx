import React, { FC } from 'react';
import * as Styled from './styles.FormTextAreaField';

export interface Props {
  name: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
}
/**
 * TextArea input form control
 *@function Input
 *@param {string} name - label && input name
 *@param {string} type - input type
 *@param {string} placeholder - input placeholder
 *@param {string} value - value of input
 *@param {function} setValue - setter from useState to control value
 *@param {boolean} required - is required, default to false
 *@returns {JSX.Element} - Rendered Form text control element
 */
const FormTextAreaField: FC<Props> = ({
  name,
  placeholder,
  value,
  setValue,
  required = false,
}) => {
  return (
    <Styled.Container>
      <Styled.TextArea
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      />
      <Styled.Label htmlFor={name}>{placeholder}</Styled.Label>
    </Styled.Container>
  );
};

export default FormTextAreaField;
