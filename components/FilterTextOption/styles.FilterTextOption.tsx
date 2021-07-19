import styled from 'styled-components';

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

  &:hover {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;

export const RemoveFilterButton = styled(FilterButton)``;
