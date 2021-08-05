import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
  }
`;
export const Figure = styled.figure`
  img {
    display: block;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media ${({ theme }) => theme.media.phone} {
    width: 100%;
    a {
      font-size: 0.75rem;
    }
  }
`;
export const RightColumn = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media ${({ theme }) => theme.media.phone} {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  vertical-align: center;
  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryGolden};

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;

interface Props {
  btnType: 'add' | 'remove';
}
export const ControlButton = styled.button<Props>`
  cursor: pointer;
  font-size: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme, btnType }) =>
    btnType === 'add' ? theme.activeGreen : theme.lightGray};

  &:hover {
    color: ${({ theme, btnType }) =>
      btnType === 'add' ? theme.primaryGolden : theme.primaryRed};
  }
  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
