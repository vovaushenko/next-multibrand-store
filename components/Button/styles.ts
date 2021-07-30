import styled, { css, keyframes } from 'styled-components';
import { Props } from './Button';

const defaultButton = css`
  background: ${({ theme }) => theme.primaryGolden};
`;

const hoveredButton = css`
  background: ${({ theme }) => theme.secondaryGolden};
`;

const focusedButton = css`
  box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryGolden};
`;

const disabledButton = css`
  background: ${({ theme }) => theme.darkGray};
  cursor: not-allowed;
`;

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const loadingButton = css`
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: ${({ theme }) => theme.primaryGolden}
      repeating-linear-gradient(
        60deg,
        transparent,
        transparent 10px,
        #ffa500 10px,
        #ffc130 20px
      );
    animation: ${loadingKeyframes} 1s infinite linear;
  }
  & > span {
    opacity: 0.5;
  }
  cursor: wait;
`;

const completedButton = css`
  padding: 0 2rem;
  background: ${({ theme }) => theme.primaryGreen};
  cursor: default;
`;

export const StyledButton = styled.button<Props>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0 2rem;
  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  background: transparent;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.primaryWhite : theme.secondaryBg};
  cursor: pointer;
  outline: none;
  & > span {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;
  }
  ${(p) => !p.isLoading && defaultButton};
  &:hover {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && hoveredButton};
  }
  &:focus {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && focusedButton};
  }
  &:disabled {
    ${disabledButton};
  }
  ${(p) => p.isLoading && loadingButton};
  ${(p) => p.isCompleted && completedButton};
`;
