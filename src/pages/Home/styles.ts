import styled from 'styled-components';
import formBg from '../../assets/form-bg.png';
import clientsBg from '../../assets/clients-bg.png';

export const Container = styled.div`
  height: 70vh;
  width: 100vw;

  display: flex;
  justify-content: stretch;

  text-align: center;

  color: #fff;

  h3{
    font-size: 2.5rem;
    width: 70%;
    margin: 1.25rem 0;
  }
`;

export const FormCard = styled.div`
  background: linear-gradient( rgba(208, 119, 35, 0.6) 100%, rgba(208, 119, 35, 0.6)100%),url(${formBg}) no-repeat center;
  background-size: cover;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ClientsCard = styled.div`
  background: linear-gradient( rgba(207, 139, 38, 0.7) 100%,rgba(207, 139, 38, 0.7)100%),url(${clientsBg}) no-repeat center;
  background-size: cover;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

