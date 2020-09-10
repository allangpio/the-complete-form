import React from 'react';
import { Link } from 'react-router-dom';
import { FaWpforms, FaUsers } from 'react-icons/fa';

import { Container, FormCard, ClientsCard } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <FormCard>
        <FaWpforms size={60} />
        <Link to="/step1">
          Fill up this form and get to be seen by thousands of people
        </Link>
      </FormCard>
      <ClientsCard>
        <FaUsers size={60} />
        <Link to="/clients">Take a glance at some of our clients</Link>
      </ClientsCard>
    </Container>
  );
};

export default Home;
