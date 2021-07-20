import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 1.7;
  color: ${({ theme }) => theme.lightGray};
  @media ${({ theme }) => theme.media.phone} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SneakerManiacPlus = styled.h3`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryGolden};
  font-size: 1.25rem;
`;
