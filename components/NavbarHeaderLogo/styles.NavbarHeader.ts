import styled from 'styled-components';

export const HeaderLogo = styled.h1`
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /**
 * ----------------------------------------
 * animation color-change
 * ----------------------------------------
 */
  @keyframes color-change {
    0% {
      color: ${({ theme }) => theme.primaryGolden};
    }
    100% {
      color: ${({ theme }) => theme.primaryRed};
    }
  }

  .icon {
    font-size: 1.75rem;
    animation: color-change 5s linear infinite alternate both;
  }
`;

export const Sneaker = styled.a`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.primaryWhite};
`;
export const Maniacs = styled.p`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.primaryGolden};
`;
