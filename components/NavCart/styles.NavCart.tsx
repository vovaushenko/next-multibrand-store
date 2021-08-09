import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  position: relative;

  @media ${({ theme }) => theme.media.tablet} {
    flex: auto;
  }
`;

export const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryWhite};
  display: flex;
  align-items: center;
  border: none;

  span {
    margin-left: 1.25rem;
    font-size: 1rem;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: auto;

    span {
      margin-left: 1.25rem;
      font-size: 0.75rem;
    }
  }
`;

export const ModalContentWrap = styled.div``;
