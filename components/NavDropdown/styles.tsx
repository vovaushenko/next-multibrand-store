import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  margin-top: 2rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const ListItem = styled.li`
  flex: 0.25;
  padding: 1rem;
  border-left: 1px solid ${({ theme }) => theme.primaryBg};
  h2 {
    margin-bottom: 1rem;
  }
`;
