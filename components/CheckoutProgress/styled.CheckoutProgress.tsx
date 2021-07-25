import styled from 'styled-components';

interface Props {
  isStepPassed: boolean;
}

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const IconControl = styled.figure<Props>`
  display: flex;
  align-items: center;
  .icon {
    color: ${({ theme, isStepPassed }) =>
      isStepPassed ? theme.primaryGolden : theme.primaryWhite};
  }
`;

export const ProgressLink = styled.a<Props>`
  color: ${({ theme, isStepPassed }) =>
    isStepPassed ? theme.primaryGolden : theme.primaryWhite};
`;
