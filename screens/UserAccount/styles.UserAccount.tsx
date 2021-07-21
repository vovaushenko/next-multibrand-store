import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  padding: 1rem;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 1rem;
    gap: 1rem;
    padding: 0;
    flex-direction: column;
  }
`;

const backgroundAndBorder = css`
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1.25rem;
`;

export const Button = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.primaryWhite};
  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }
  background: transparent;
  border: none;
  font-size: 1rem;
  display: inline-flex;
`;

export const LeftColumn = styled.aside`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${backgroundAndBorder}
`;

export const ContentColumn = styled.main`
  flex: 0.75;
  overflow: clip;
  h2 {
    margin-top: 0;
  }
  ${backgroundAndBorder}
`;
