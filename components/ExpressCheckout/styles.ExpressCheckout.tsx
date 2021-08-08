import styled from 'styled-components';

export const Container = styled.section`
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayBg};

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PaymentMethod = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.25rem 3rem;
  margin-left: 1rem;
  justify-content: center;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.primaryGolden};
  border: 1px solid ${({ theme }) => theme.primaryGolden};
  border-radius: ${({ theme }) => theme.borderRadius};
  .payment__icon {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;
