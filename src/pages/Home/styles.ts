import styled from 'styled-components';
import formBg from '../../assets/form-bg.png';
import clientsBg from '../../assets/clients-bg.png';

export const Container = styled.div`
  height: 70vh;
  width: 100vw;

  display: flex;
  justify-content: stretch;

  text-align: center;

  color: #232323;

  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: medium;
    width: 25ch;
    margin: 1.25rem 0;
    color: inherit;
  }
`;

export const FormCard = styled.div`
  background: linear-gradient( rgba(196, 196, 196, 0.5) 100%, rgba(196, 196, 196, 0.5)100%),url(${formBg}) no-repeat center;
  background-size: cover;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ClientsCard = styled.div`
  background: linear-gradient( rgba(196, 196, 196, 0.5) 100%,rgba(196, 196, 196, 0.5)100%),url(${clientsBg}) no-repeat center;
  background-size: cover;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

