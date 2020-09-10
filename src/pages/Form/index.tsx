// eslint-disable-next-line no-use-before-define
import React from 'react';

import Step1 from '../Step1';
// import Step2 from '../../components/Step2';

import { Container } from './styles';

const CompleteForm: React.FC = () => {
  return (
    <Container>
      <Step1 />
    </Container>
  );
};

export default CompleteForm;
