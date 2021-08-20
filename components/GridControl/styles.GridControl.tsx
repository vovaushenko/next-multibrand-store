import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.secondaryBg};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};

  h3 {
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.lightGray};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 1rem 2rem;
    h3 {
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
  color: ${({ theme }) => theme.lightGray};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }

  @media ${({ theme }) => theme.media.phone} {
    span {
      display: none;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    cursor: pointer;
    font-size: 1.3rem;

    &:hover {
      color: ${({ theme }) => theme.secondaryGolden};
    }
  }

  .icon-list {
    font-size: 1.55rem;
  }
`;
