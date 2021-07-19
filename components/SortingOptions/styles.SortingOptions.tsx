import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SortingOption = styled.button`
  align-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.darkGray};

  &:hover {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
