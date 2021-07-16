import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0.25rem;
`;

export const FilterOption = styled.details``;

export const ColorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

interface Props {
  bgColor: string;
}

const rainbowGradient = css`
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
`;

export const FilterButton = styled.button<Props>`
  cursor: pointer;
  background: transparent;
  border: none;
  height: 2.25rem;
  width: 2.25rem;
  background: ${({ bgColor }) => bgColor};
  ${({ bgColor }) => bgColor === 'multi' && rainbowGradient}
  margin: 0;
`;
