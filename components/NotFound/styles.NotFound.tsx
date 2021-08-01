import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
`;

export const Text = styled.p``;

const spinningKeyframe = keyframes`
  from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

export const Sneaker = styled.figure`
  margin: 1rem 0;
  img {
    display: block;
    animation: ${spinningKeyframe} 2500ms infinite linear;
  }
`;
