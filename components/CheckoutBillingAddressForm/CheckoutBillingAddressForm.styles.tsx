import styled from 'styled-components';
import { slideInTop } from '../../styles/reusableStyles';

export const Container = styled.section`
  animation: ${slideInTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    input {
      background-color: ${({ theme }) => theme.dashboardGrayBg};
    }

    div {
      margin: 0;
      padding: 0;
    }
  }
`;

export const FormControl = styled.fieldset`
  display: flex;
  gap: 1.75rem;
  outline: 0;
  border: 0;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;
