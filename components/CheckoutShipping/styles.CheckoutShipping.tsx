import styled, { css } from 'styled-components';

const backgroundAndPadding = css`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayBg};
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ShippingInfo = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${backgroundAndPadding};
`;

export const Header = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
`;
export const Content = styled.p``;

export const InputControl = styled.div`
  /* TODO:CUSTOM CHECKBOX */
  cursor: pointer;
  label {
    margin-left: 0.5rem;
  }
`;

export const ButtonWrap = styled.footer`
  display: flex;
  gap: 1rem;
  align-items: center;
  ${backgroundAndPadding}

  button {
    color: ${({ theme }) => theme.dashboardGrayBg};
  }
`;

export const RouterLink = styled.a`
  color: ${({ theme }) => theme.primaryGolden};
`;
