import styled, { css } from 'styled-components';

const backgroundAndPadding = css`
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayBg};
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  h3 {
    margin: 0;
  }
`;
export const ShippingInfo = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${backgroundAndPadding};

  @media ${({ theme }) => theme.media.phone} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Header = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
`;

interface ContentProps {
  marginTop?: string;
}

export const Content = styled.p<ContentProps>`
  margin-top: ${({ marginTop }) => marginTop};
`;

export const RouterLink = styled.a`
  color: ${({ theme }) => theme.primaryGolden};
`;

export const ButtonWrap = styled.footer`
  display: flex;
  gap: 1.75rem;
  align-items: center;

  ${backgroundAndPadding}
  button {
    color: ${({ theme }) => theme.dashboardGrayBg};
    background-color: ${({ theme }) => theme.primaryGreen};
    width: 50%;
  }
`;
