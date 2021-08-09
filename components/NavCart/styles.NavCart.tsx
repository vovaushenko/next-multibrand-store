import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  position: relative;

  @media ${({ theme }) => theme.media.tablet} {
    flex: none;
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
`;

export const ModalContentWrap = styled.div``;
