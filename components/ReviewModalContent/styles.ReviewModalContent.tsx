import styled, { css } from 'styled-components';

const sharedStyles = css`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayCard};
`;

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;

  ${sharedStyles}
  background-color: ${({ theme }) => theme.dashboardGrayBg};

  .icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryGolden};
  }
`;

export const InfoWrapper = styled.div`
  ${sharedStyles}
`;
export const Contact = styled.div`
  ${sharedStyles}

  .customer-info {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const Status = styled.header`
  display: flex;
  align-items: center;
`;

export const Header = styled.h4``;
export const Text = styled.p``;

export const Email = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primaryWhite};
`;
export const Name = styled.p`
  display: flex;
  align-items: center;
`;

export const BtnWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  button {
    width: 40%;
  }
  button:nth-child(1) {
    background-color: ${({ theme }) => theme.primaryGreen};
  }

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.primaryRed};
  }
`;
