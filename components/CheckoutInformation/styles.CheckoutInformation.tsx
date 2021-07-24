import styled from 'styled-components';

export const Container = styled.main``;

export const UserInformation = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  align-items: center;
  margin: 1rem 0;

  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayBg};

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }
`;

export const SignOut = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.primaryGolden};
  font-size: 1rem;
`;

export const UserDetails = styled.p``;
