import styled from 'styled-components';

export const Container = styled.section`
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

export const ButtonWrap = styled.footer`
  display: flex;
  gap: 1.75rem;
  align-items: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayBg};

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }

  button {
    color: ${({ theme }) => theme.dashboardGrayBg};
  }
`;

export const ReturnToCart = styled.a`
  color: ${({ theme }) => theme.primaryGolden};
`;
