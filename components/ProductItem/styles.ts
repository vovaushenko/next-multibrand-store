import styled from 'styled-components';

export const StyledListItem = styled.li`
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.dashboardGrayCard};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1rem 2rem;
  }
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }
`;
