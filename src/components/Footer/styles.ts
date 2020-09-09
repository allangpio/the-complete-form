import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
  div {
    height: calc(30vh - 5rem);
    width: 30vw;
    background: #333;
  }

  p{
    flex: 1;

    text-align: center;
    font-weight: 300;
    font-style: italic;
    font-size: 1.5rem;
    color: #333;

  }
`;
