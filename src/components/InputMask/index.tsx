import React, { useRef, useEffect } from 'react';

import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { useField } from '@unform/core';
import { Container } from './styles';

interface Props extends InputProps {
  name: string;
  label: string;
}

const InputMask: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default InputMask;
