/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef, InputHTMLAttributes } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

const RadioInput: React.FC<Props> = ({ name, label, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, registerField, defaultValue = [] } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <div>
        {options.map((option, index) => (
          <label htmlFor={option.id} key={option.id}>
            <input
              defaultChecked={defaultValue.find(
                (dv: string) => dv === option.id,
              )}
              ref={ref => {
                inputRefs.current[index] = ref as HTMLInputElement;
              }}
              value={option.value}
              type="radio"
              id={option.id}
              name={name}
              {...rest}
            />
            {option.label}
          </label>
        ))}
      </div>
    </Container>
  );
};

export default RadioInput;
