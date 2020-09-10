// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
import { useForm } from '../../hooks/form';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import { Container, FormGroup } from './styles';

const Step2: React.FC = () => {
  const { submitClient } = useForm();
  const formRef = useRef<FormHandles>(null);

  async function functionThatGetsData(): Promise<void> {
    const zipCode = formRef.current?.getFieldValue('zipCode');
    const re = /\s-\s/g;
    const zipCodeString = zipCode.replace(re, '');
    if (zipCodeString.match(/\d$/g)) {
      try {
        const response = await api.get(`${zipCodeString}/json`);
        if (response.data.erro) {
          throw new Error();
        }
        const {
          logradouro: address,
          localidade: city,
          uf: state,
        } = await response.data;

        formRef.current?.setFieldValue('state', state);
        formRef.current?.setFieldValue('address', address);
        formRef.current?.setFieldValue('city', city);
      } catch (err) {
        formRef.current?.setFieldValue('state', 'Invalid Zip Code');
        formRef.current?.setFieldValue('address', 'Invalid Zip Code');
        formRef.current?.setFieldValue('city', 'Invalid Zip Code');
      }
    }
  }

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Form</h1>
        <FormGroup>
          <InputMask
            name="phone"
            label="Phone"
            inputMode="numeric"
            mask="(99) 99999-9999"
          />
          <InputMask
            mask="99999 - 999"
            name="zipCode"
            label="Zip Code"
            inputMode="numeric"
            onChange={functionThatGetsData}
          />
        </FormGroup>
        <FormGroup>
          <Input name="city" label="City" disabled />
          <Input name="state" label="State" disabled />
        </FormGroup>
        <FormGroup>
          <Input name="address" label="Address" disabled />
          <Input name="complement" label="Number / Complement" />
        </FormGroup>
        <button type="submit">Next</button>
      </Form>
    </Container>
  );
};

export default Step2;
