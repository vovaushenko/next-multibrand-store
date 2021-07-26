import styled from 'styled-components';

export const Navigation = styled.nav``;

export const Container = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  padding: 5rem 1rem;

  li {
    margin: 1rem 0;
  }
`;

export const AvatarWrapper = styled.figure`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.dashboardGrayBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 0.5rem;
`;

export const AdminName = styled.figcaption``;

export const SignOut = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryGolden};
`;
