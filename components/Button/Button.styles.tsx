import styled, { css, keyframes } from 'styled-components';
import { Props } from './Button';

/***
 * DEFAULT BUTTON STATE
 */
const defaultButton = css`
  background: ${({ theme }) => theme.primaryGolden};
`;
/***
 * HOVERED BUTTON STATE
 */
const hoveredButton = css`
  opacity: 0.95;
  transform: translateY(-2px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
`;
/***
 * FOCUSED BUTTON STATE
 */
const focusedButton = css`
  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryBg};
  }
`;
/***
 * DISABLED BUTTON STATE
 */
const disabledButton = css`
  background: ${({ theme }) => theme.darkGray};
  cursor: not-allowed;
`;
/***
 * ACTIVE BUTTON STATE
 */
const activeButton = css`
  transform: scale(0.97);

  :before {
    display: none;
  }

  :after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 1px;
    left: 1px;
    right: 1px;
    height: 55%;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75)
    );
    border-radius: 14px 14px 14px 14px/ 4px 4px 100px 100px;
  }
`;

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;
/***
 * LOADING BUTTON STATE
 */
const movingGradient = css`repeating-linear-gradient(60deg,
#ffa500,
#ffa500 10px,
${({ theme }) => theme.primaryGolden} 10px,
${({ theme }) => theme.primaryGolden} 20px)
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
    background: ${({ theme }) => theme.secondaryBg} ${movingGradient};
    animation: ${loadingKeyframes} 2s infinite linear;
  }

  & > span {
    opacity: 0.5;
  }

  cursor: wait;
`;
/***
 * COMPLETED BUTTON STATEAir
 */
const completedButton = css`
  background: ${({ theme }) => theme.primaryGreen};
  cursor: default;
`;

/***
 * BUTTON BASE STYLES
 */
export const BTN = styled.button<Props>`
  position: relative;
  overflow: hidden;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1rem;

  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  background: transparent;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primaryWhite};
  cursor: pointer;
  outline: none;

  text-shadow: rgb(0 0 0 / 15%) 1px 1px 1px;
  transition: 0.3s all ease;

  :before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 1px;
    left: 2px;
    right: 2px;
    height: 35%;
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    border-radius: 4px 4px 100px 100px / 14px 14px 14px 14px;
  }

  ${(p) => !p.isLoading && defaultButton};

  &:hover {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && hoveredButton};
  }

  &:focus {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && focusedButton};
  }

  &:active {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && activeButton};
  }

  ${(p) => p.isLoading && loadingButton};

  &:disabled {
    ${disabledButton};
  }

  ${(p) => p.isCompleted && completedButton};

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
