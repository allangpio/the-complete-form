import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, LinkList } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LinkList>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/step1">form</Link>
        </li>
        <li>
          <Link to="/clients">clients</Link>
        </li>
      </LinkList>
      <Logo>TCF</Logo>
    </Container>
  );
};

export default Header;
