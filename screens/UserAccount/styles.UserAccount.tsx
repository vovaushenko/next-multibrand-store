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

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 1rem;
  display: inline-flex;
  align-items: center;

  .icon {
    font-size: 1.25rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.primaryGolden};
  }

  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }
`;

const backgroundAndBorder = css`
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1.25rem;
`;

export const LeftColumn = styled.aside`
  flex: 0.15;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: max-content;
  ${backgroundAndBorder}
`;

export const UserName = styled.h4`
  color: ${({ theme }) => theme.primaryGolden};
`;

export const ContentColumn = styled.main`
  flex: 0.85;
  overflow: clip;
  h2 {
    margin-top: 0;
  }
  ${backgroundAndBorder}
`;
