import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  margin-top: 2rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 1.25rem;
`;

export const ListItem = styled.li`
  cursor: pointer;
  overflow: clip;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
    .section-image {
      transition: all 0.5s ease-in-out;
      transform: scale(1.07);
    }
  }
`;
