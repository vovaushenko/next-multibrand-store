import React, { ChangeEvent, FC } from 'react';
import { FileField } from './style';

export interface Props {
  name: string;
  placeholder: string;
  labelText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  multiple?: boolean;
}

const FormFileField: FC<Props> = ({
  labelText,
  onChange,
  name,
  placeholder,
  required,
  multiple = false,
}) => {
  return (
    <FileField>
      <label className="form-file-upload" htmlFor={name}>
        {labelText}
        <input
          type="file"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          multiple={multiple}
        />
      </label>
    </FileField>
  );
};

export default FormFileField;
