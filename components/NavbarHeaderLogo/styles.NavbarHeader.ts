import styled from 'styled-components';

export const HeaderLogo = styled.h1`
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Sneaker = styled.a`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.primaryWhite};
  text-transform: uppercase;
  margin-left: 0.25rem;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
export const Maniacs = styled.span`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.primaryGolden};
  text-transform: uppercase;
`;
