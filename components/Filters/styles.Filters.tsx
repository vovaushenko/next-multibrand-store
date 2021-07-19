import styled from 'styled-components';

export const Container = styled.aside`
  position: sticky;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 35%;
  padding: 1.25rem;
  overflow: hidden;
  background: ${({ theme }) => theme.secondaryBg};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ClearFilters = styled.button`
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primaryWhite};
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.primaryGolden};
  }
`;
