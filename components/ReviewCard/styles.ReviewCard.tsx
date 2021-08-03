import styled from 'styled-components';

interface Props {
  hasReviews: boolean;
}

export const CardContainer = styled.article<Props>`
  display: grid;
  /* if there some reviews we need one column to display them vertically, otherwise two columns for button and text */
  grid-template-columns: ${({ hasReviews }) =>
    hasReviews ? '100%' : '50% 50%'};

  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1.25rem;
  width: 100%;

  button {
    justify-self: end;
    width: 70%;
  }
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Reviews = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Review = styled.p``;
