import React from 'react';
import { FaWpforms, FaUsers } from 'react-icons/fa'

import { Container, FormCard, ClientsCard } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <FormCard>
        <FaWpforms size={60} />
        <h3>Fill up this form and get to be seen by thousands of people</h3>
      </FormCard>
      <ClientsCard>
        <FaUsers size={60} />
        <h3>Take a glance at some of our clients</h3>
      </ClientsCard>
    </Container>
  )
}

export default Home;
