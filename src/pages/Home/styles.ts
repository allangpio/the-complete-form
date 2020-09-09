import styled, { keyframes } from 'styled-components';
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

    backface-visibility: hidden;
    transition: transform 200ms, text-shadow 200ms;

    &:hover{
      transform: translateY(-1px) scale(1.02);
      text-shadow: rgba(35, 35, 35, 0.5) 0 1px 2px;
    }
  }
`;

const appearFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-120px);
  }
  80% {
    opacity: .8;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }

`

const appearFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(120px);
  }
  80% {
    opacity: .8;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }

`

export const FormCard = styled.div`
  background: linear-gradient( rgba(196, 196, 196, 0.5) 100%, rgba(196, 196, 196, 0.5)100%),url(${formBg}) no-repeat center;
  background-size: cover;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  & > *{
    animation: 1.5s ${appearFromLeft} ease-out;
  }

`;

export const ClientsCard = styled.div`
  background: linear-gradient( rgba(196, 196, 196, 0.5) 100%,rgba(196, 196, 196, 0.5)100%),url(${clientsBg}) no-repeat center;
  background-size: cover;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  & > * {
    animation: 1.5s ${appearFromRight} ease-out;
  }

`;

