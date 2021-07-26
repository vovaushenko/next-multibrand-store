import styled from 'styled-components';

interface Props {
  variant: 'icon' | 'figure' | 'stats';
}
export const Container = styled.article<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ variant }) => (variant === 'figure' ? 'column' : 'row')};
  flex-wrap: wrap;
  padding: 2rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  width: 100%;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryGolden};
  text-transform: capitalize;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Header = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.lightGray};
  text-transform: capitalize;
`;
export const Stat = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryWhite};
`;

export const ImageWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.dashboardGrayBg};
  padding: 0.75rem;
  margin-left: 1rem;

  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryGolden};
  }
`;

export const Figure = styled.figure``;
