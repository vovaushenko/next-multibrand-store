import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.dashboardGrayBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
`;

export const OrderStatus = styled.header`
  p {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;

export const OrderItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};

  h4 {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.lightGray};
    font-weight: 400;
    font-size: 1rem;
  }

  figcaption {
    margin-left: 2rem;
  }
`;

export const ButtonWrapper = styled.footer`
  display: flex;
  gap: 1.5rem;

  button {
    width: 100%;
  }

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.primaryGreen};

    :hover {
      background-color: ${({ theme }) => theme.activeGreen};
    }
  }
`;
