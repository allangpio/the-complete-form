import styled from 'styled-components';

export const Container = styled.div`
  height: 70vh;
  width: 100vw;

  display: grid;
  place-content: center;

  form {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    padding: 2rem 1rem;
    border-radius: 8px;
    min-width: 320px;
  }
`;

export const FormGroup = styled.div`
  display: flex;

  & + div {
    margin-top: 1rem;
  }
`;
