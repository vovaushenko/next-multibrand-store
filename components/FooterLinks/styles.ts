import styled from 'styled-components';

export const FooterLinksSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 1.7;
  color: ${({ theme }) => theme.lightGray};
`;

export const SneakerManiacPlus = styled.h3`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryGolden};
  font-size: 1.25rem;
`;
