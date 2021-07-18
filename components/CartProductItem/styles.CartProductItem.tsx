import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Figure = styled.figure`
  img {
    display: block;
  }
`;

export const Wrap = styled.div``;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryGolden};
`;

export const QuantityController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0.75rem;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Quantity = styled.div`
  padding: 5px 1.25rem;
  background: ${({ theme }) => theme.lightGray};
  color: ${({ theme }) => theme.primaryWhite};
`;

interface Props {
  fontSize: string;
}
export const ControlButton = styled.button<Props>`
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.lightGray};

  &:hover {
    color: ${({ theme }) => theme.primaryWhite};
  }
`;
