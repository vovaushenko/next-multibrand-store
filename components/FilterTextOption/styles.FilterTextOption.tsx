import styled from 'styled-components';
import { slideInTop } from '../../styles/reusableStyles';

export const Container = styled.div`
  padding: 0.25rem;
`;

export const FilterOption = styled.details``;

export const FilterButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primaryWhite};
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  animation: ${slideInTop} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;

  &:hover {
    color: ${({ theme }) => theme.primaryGolden};
    background-color: ${({ theme }) => theme.dashboardGrayCard};
  }
`;

export const RemoveFilterButton = styled(FilterButton)``;
