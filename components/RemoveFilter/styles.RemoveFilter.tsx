import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterName = styled.h3`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.25rem;
`;

export const RemoveBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.primaryGolden};
  .remove_icon {
    font-size: 1.5rem;
  }
`;
