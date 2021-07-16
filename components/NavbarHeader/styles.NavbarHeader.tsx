import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  align-items: center;
  gap: 2rem;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 0.25rem 0.75rem;
  width: 90%;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.phone} {
    display: none;
  }
`;
