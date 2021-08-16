import { keyframes } from 'styled-components';

/**
 * @keyframes Main animation appearance for modals, popups and hidden components
 * @function slideInKeyframes
 * @returns {keyframes} - keyframes for element's appearance animations
 * @example animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
 */
export const slideInKeyframes = keyframes`
  0% {
    transform: translateY(-400px) scaleY(1.5) scaleX(0.2);
    transform-origin: 50% 0;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }`;
/**
 * @keyframes Main animation dis-appearance for modals, popups and hidden components
 * @function slideOutKeyframes
 * @returns {keyframes} - keyframes for element's dis-appearance animations
 * @example animation: ${slideOutKeyframes} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
 */
export const slideOutKeyframes = keyframes`
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-1100px);
    opacity: 0;
  }
`;
