import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 4rem;
  padding: 0.5rem;
  background-image: ${({ theme }) => theme.blackToGrayGradient};
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.secondaryGolden};
  cursor: pointer;
  margin-top: 15rem;

  position: fixed;
  top: 50%;
  z-index: 6;
  left: calc(100% - 4rem);

  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryWhite};
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    .icon {
      transform: rotate(360deg);
    }
  }
`;
