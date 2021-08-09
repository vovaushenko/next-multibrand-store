import styled from 'styled-components';

export const Container = styled.nav`
  /* will not be shown on desctop screens */
  display: none;

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    height: 5rem;
    /* Positioning */
    position: fixed;
    top: 97%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    width: 100%;
  }
`;

export const IconList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.dashboardGrayBg};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

export const LI = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

export const IconText = styled.p`
  font-size: 0.5rem;
  text-transform: capitalize;
`;
