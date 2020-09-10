// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useForm } from '../../hooks/form';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import RadioInput from '../../components/RadioInput';

import { Container, FormGroup } from './styles';

import formatIncome from '../../utils/formatIncome';

const Step1: React.FC = () => {
  const { submitClient } = useForm();
  const formRef = useRef<FormHandles>(null);

  const radioOptions = [
    { id: 'male', value: 'male', label: 'Male' },
    { id: 'female', value: 'female', label: 'Female' },
    { id: 'not-declared', value: 'not-declares', label: 'Not declared' },
  ];

  const handleSubmit = useCallback(
    data => {
      submitClient(data);
    },
    [submitClient],
  );

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
              event.target.value = formatIncome(value);
            }}
          />
        </FormGroup>
        <button type="submit">Next</button>
      </Form>
    </Container>
  );
};

export default Step1;
