import React from 'react';

import { Container, Logo, LinkList } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LinkList>
        <li><a href="fjdkla">home</a></li>
        <li><a href="fjdkla">form</a></li>
        <li><a href="fjdkla">clients</a></li>
      </LinkList>
      <Logo>TCF</Logo>
    </Container>
  )
}

export default Header;
