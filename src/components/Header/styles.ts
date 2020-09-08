import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 5rem;

  background: #F7C501;

  display: flex;
  align-items: center;

`;
export const Logo = styled.h1`
  font-weight: 500;
  color: #010003;
  font-size: 4rem;
  margin: 0 2rem 0 auto;
`;

export const LinkList = styled.ul`
  list-style: none;

  display: flex;
  flex: 1;
  justify-content: center;

  a {
    text-decoration: none;
    color: #010003;

    padding: 1rem 2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
