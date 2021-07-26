import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayCard};
`;

export const TextWrapper = styled.div``;

export const Header = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.lightGray};
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
  background-color: ${({ theme }) => theme.primaryGolden};
  padding: 0.5rem;
  margin-left: 1rem;

  .icon {
    font-size: 2rem;
  }
`;
