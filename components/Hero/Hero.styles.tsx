import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  line-height: 1;
  perspective: 1000px;

  background-image: ${({ theme }) => theme.blackToGrayGradient};
`;

interface Props {
  transition: string;
  translateZ: string;
}

export const ImageWrap = styled.figure<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;

  .hero-image {
    display: block;
    transition: ${({ transition }) => transition};
    transform: ${({ translateZ }) => translateZ};
    transition: all 0.75s ease-out;
  }
`;

export const Figcaption = styled.figcaption`
  text-align: center;
  margin-bottom: 1rem;
`;

const headerStyles = css`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  transition: all 0.75s ease-out;
`;

interface HeaderProps {
  headerTranslate: string;
}

export const Header = styled.h1<HeaderProps>`
  ${headerStyles}

  transform: ${({ headerTranslate }) => headerTranslate};
  @media ${({ theme }) => theme.media.phone} {
    font-size: 1.75rem;
  }
`;
export const SubHeader = styled.h1<HeaderProps>`
  ${headerStyles}
  font-size: 4rem;
  color: ${({ theme }) => theme.primaryGolden};
  transform: ${({ headerTranslate }) => headerTranslate};
  @media ${({ theme }) => theme.media.phone} {
    font-size: 2.75rem;
  }
`;
