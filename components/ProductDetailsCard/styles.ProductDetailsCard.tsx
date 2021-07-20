import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  width: 100%;

  flex-direction: column;
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1.25rem;
  text-transform: capitalize;

  h1 {
    margin: 0;
  }

  button {
    width: 50%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    button {
      width: 100%;
    }
  }
`;
export const Price = styled.h4`
  color: ${({ theme }) => theme.secondaryGolden};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  margin-bottom: 1rem;
  li {
    margin-left: 1rem;
    list-style: circle;
  }
`;

export const SizesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  li:nth-child(n + 2) {
    margin-left: 0.5rem;
  }
`;

interface Props {
  isSelected: boolean;
}
// if param isSelected equals true, additional box-shadow and color will be added to Size
export const Size = styled.li<Props>`
  cursor: pointer;
  padding: 0.2rem 1rem;
  margin: 0.25rem 0;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  box-shadow: ${({ theme, isSelected }) => isSelected && theme.selectedOutline};
  color: ${({ theme, isSelected }) => isSelected && theme.secondaryGolden};
  border-radius: 3px;
`;

export const SizingHelp = styled.a`
  margin-bottom: 1rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.primaryWhite};
`;
