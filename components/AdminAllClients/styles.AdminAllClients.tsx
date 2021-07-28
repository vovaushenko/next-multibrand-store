import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Filter = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 2rem;
  width: 100%;
  gap: 1rem;
`;

export const UserCard = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 2rem;
  width: 100%;

  .icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryGolden};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }
`;

const linkStyles = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.primaryWhite};
`;

export const MailClient = styled.a`
  ${linkStyles}
`;

export const ClientInfo = styled.div`
  ${linkStyles}
`;

export const Role = styled.div`
  ${linkStyles}
`;
