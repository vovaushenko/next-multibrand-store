import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayBg};
`;

const formControlCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const FormControl = styled.div`
  ${formControlCss}
`;

export const FormTextControl = styled.div`
  ${formControlCss}

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const CreditCardProviders = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
