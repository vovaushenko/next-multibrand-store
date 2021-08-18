import styled, { css } from 'styled-components';
import { slideInTop } from '../../styles/reusableStyles';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.75rem;
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
  ${formControlCss} @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const CreditCardProviders = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const CreditCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-bottom: 2rem;
  animation: ${slideInTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${slideInTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
