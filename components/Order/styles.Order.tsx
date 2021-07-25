import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  gap: 1rem;
  width: 100%;
  padding: 1rem 3rem;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }

  h3 {
    color: ${({ theme }) => theme.primaryGolden};
    margin-bottom: 0.5rem;
  }
`;

export const LeftColumn = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-right: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

export const RightColumn = styled.div`
  flex: 0.75;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const OrderItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.dashboardGrayBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 2rem;

  p:last-child {
    color: ${({ theme }) => theme.primaryGolden};
  }
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.activeGreen};
  }
`;

interface Props {
  margin?: string;
}
export const Subheader = styled.p<Props>`
  color: ${({ theme }) => theme.secondaryGolden};
  margin: ${({ margin }) => margin};
`;

interface DeliveryProps {
  isDelivered: boolean;
}
export const DeliveryStatus = styled.p<DeliveryProps>`
  color: ${({ isDelivered, theme }) =>
    isDelivered ? theme.activeGreen : theme.primaryRed};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 1rem;

  p:nth-child(2) {
    color: ${({ theme }) => theme.primaryGolden};
    font-weight: bold;
  }
`;

export const ButtonWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.primaryGreen};
  }
`;
