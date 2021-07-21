import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  /**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
  @keyframes fade-in-top {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
