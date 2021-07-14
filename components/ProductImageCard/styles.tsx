import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1rem;
`;

export const ImageList = styled.aside`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface StyledProps {
  isHighlighted: boolean;
}
// by clicking on Image we will set its isHighlighted to true, which will in turn add border-color in ImageWrapper
export const ImageWrapper = styled.figure<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 3px;
  border: 1px solid transparent;
  border-color: ${({ isHighlighted, theme }) =>
    isHighlighted && theme.secondaryGolden};
`;

export const BigImage = styled.figure`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Review = styled.p``;
