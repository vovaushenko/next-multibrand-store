import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  align-items: flex-start;
`;

export const AccountButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 1.125rem;
  font-weight: 600;

  .account-icon {
    margin-left: 0.5rem;
  }
`;
