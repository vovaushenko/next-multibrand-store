import styled, { css } from 'styled-components';
import { slideInKeyframes } from '../../styles/reusableStyles';

export const Container = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 1rem;
    animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  }
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const LI = styled.li``;

interface Props {
  marginTop?: string;
}
export const TextWrap = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  margin-top: ${({ marginTop }) => marginTop};
`;

const colorCSS = css`
  color: ${({ theme }) => theme.lightGray};
`;

export const Subtotal = styled.p`
  ${colorCSS}
`;
export const Shipping = styled.p`
  ${colorCSS}
`;

export const BoldTxt = styled.p`
  font-weight: bold;
`;

export const Total = styled.p`
  ${colorCSS}
  font-size: 1.25rem;
`;
export const TotalPrice = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
  font-size: 1.5rem;
  font-weight: bold;
`;
