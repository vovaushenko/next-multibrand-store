import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  min-height: 100vh;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column-reverse;
  }
`;
export const LeftColumn = styled.section`
  flex: 0.6;
  padding: 1.25rem 4rem;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 1rem;
    flex: auto;
  }
`;
export const RightColumn = styled.section`
  flex: 0.4;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.dashboardGrayBg};
  border-left: 1px solid ${({ theme }) => theme.borderGrayColor};

  @media ${({ theme }) => theme.media.tablet} {
    flex: auto;
  }
`;

export const Details = styled.details`
  color: ${({ theme }) => theme.primaryGolden};

  .icon {
    font-size: 1.5rem;
  }

  summary {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
`;
