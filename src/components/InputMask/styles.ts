import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    margin-left: 1rem;
  }
  & > * {
    /* display: block; */
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 0.2rem;
    margin-left: 4px;
  }
`;
