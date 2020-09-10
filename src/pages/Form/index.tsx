import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import RadioInput from '../../components/RadioInput';

import { Container, FormGroup } from './styles';

function normalizedIncome(value: string): string {
  const input = value.replace(/[^\d]/g, '');

  // eslint-disable-next-line no-return-assign
  return input ? (value = `R$ ${parseFloat(input).toLocaleString('pt')}`) : '';
}

const CompleteForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    console.log(data);
  }, []);

  const radioOptions = [
    { id: 'male', value: 'male', label: 'Male' },
    { id: 'female', value: 'female', label: 'Female' },
    { id: 'not-declared', value: 'not-declares', label: 'Not declared' },
  ];

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Form</h1>
        <FormGroup>
          <Input name="name" label="Name" style={{ width: 120 }} />
          <Input name="lastName" label="Last name" />
        </FormGroup>
        <FormGroup>
          <InputMask
            mask="99/99/9999"
            name="Birthdate"
            label="Birthdate"
            style={{ width: 100 }}
          />
          <RadioInput name="gender" label="Gender" options={radioOptions} />
        </FormGroup>
        <FormGroup>
          <Input name="profession" label="Profession" />
          <Input
            name="income"
            label="Monthly income"
            inputMode="numeric"
            style={{ width: 120 }}
            onChange={event => {
              const { value } = event.target;
              event.target.value = normalizedIncome(value);
            }}
          />
        </FormGroup>
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default CompleteForm;
