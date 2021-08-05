import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.secondaryBg};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 1rem 2rem;
    h2 {
      display: none;
    }
  }
  @media ${({ theme }) => theme.media.phone} {
    .product__amount {
      display: none;
    }
    .items__per__page {
      display: none;
    }
  }
`;

export const SortWrapper = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    cursor: pointer;
    font-size: 1.25rem;
    &:hover {
      color: ${({ theme }) => theme.secondaryGolden};
    }
  }
`;
