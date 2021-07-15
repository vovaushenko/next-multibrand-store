import styled, { css } from 'styled-components';

interface Props {
  layoutType: 'vertical' | 'grid';
}

const verticalLayout = css`
  grid-template-columns: 1fr;
`;
const gridLayout = css`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const Container = styled.section<Props>`
  display: grid;
  ${({ layoutType }) => (layoutType === 'grid' ? gridLayout : verticalLayout)}
  gap: 1px;
  overflow: hidden;
  background: ${({ theme }) => theme.borderGrayColor};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};

  min-width: 100%;
`;
