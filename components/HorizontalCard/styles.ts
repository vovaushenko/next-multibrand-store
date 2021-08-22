import styled from 'styled-components';

export const CardContainer = styled.article`
  position: relative;
  display: flex;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  gap: 1rem;
`;

export const CardImage = styled.figure`
  flex: 0.3;
  align-self: flex-end;
`;

export const CardText = styled.aside`
  flex: 0.7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 1rem;

  .router-link {
    max-width: 70%;
  }
`;
export const Price = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
  margin-top: 0.5rem;
`;

export const A = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.primaryWhite};

  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }

  :focus-visible {
    outline: none;
    box-shadow: none;
  }

  :focus-visible::before {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryGolden};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
