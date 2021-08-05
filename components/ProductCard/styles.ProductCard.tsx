import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
  background: ${({ theme }) => theme.secondaryBg};
  #quick-view-btn {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.borderGrayColor};
    :hover {
      background: ${({ theme }) => theme.borderGrayColor};
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 1rem 0.5rem;
    h3 {
      font-size: 1rem;
    }

    button {
      padding: 1rem 0.25rem;
      width: 100%;
    }
    #quick-view-btn {
      display: none;
    }
  }
`;

export const CardImage = styled.figure`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
  margin-top: 0.5rem;
`;
