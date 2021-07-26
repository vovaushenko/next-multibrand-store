import styled from 'styled-components';

export const StyledListItem = styled.li`
  background: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const BtnWrap = styled.div`
  button {
    margin-left: 2rem;
  }

  button:nth-child(1) {
    background-color: ${({ theme }) => theme.primaryRed};
  }
`;
