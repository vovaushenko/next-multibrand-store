import styled, { keyframes } from 'styled-components';

const loadingKeyframes = keyframes`
  from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    animation: ${loadingKeyframes} 2500ms infinite linear;
  }
`;
