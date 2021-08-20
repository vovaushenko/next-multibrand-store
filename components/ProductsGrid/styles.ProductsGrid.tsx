import styled, { css } from 'styled-components';

interface Props {
  layoutType: 'vertical' | 'grid';
}

const verticalLayout = css`
  grid-template-columns: 1fr;

  article {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .product-column {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    .btn-column {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media ${({ theme }) => theme.media.phone} {
      button {
        display: none;
      }
    }
  }
`;
const gridLayout = css`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Container = styled.section<Props>`
  display: grid;
  ${({ layoutType }) => (layoutType === 'grid' ? gridLayout : verticalLayout)}
  gap: 1px;
  overflow: hidden;
  background: ${({ theme }) => theme.dashboardGrayBg};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 100%;
`;
