import React from 'react';
import { FaWpforms, FaUsers } from 'react-icons/fa'

import { Container, FormCard, ClientsCard } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <FormCard>
        <FaWpforms size={60} />
        <a href="fdjksal">
          Fill up this form and get to be seen by thousands of people
        </a>
      </FormCard>
      <ClientsCard>
        <FaUsers size={60} />
        <a href="fdkajs">
          Take a glance at some of our clients
        </a>
      </ClientsCard>
    </Container>
  )
}

export default Home;
