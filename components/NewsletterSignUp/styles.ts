import styled from 'styled-components';

export const SignUP = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  margin: 2rem 0;
  width: 50%;
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.media.phone} {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
