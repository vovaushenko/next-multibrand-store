import styled from 'styled-components';

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  line-height: 1.2;

  background-image: linear-gradient(
    180deg,
    #000000 25.5%,
    #151515 40%,
    #383838 78.6%
  );

  .hero-image {
    &:hover {
      filter: drop-shadow(-5px 5px 2px #ffc130);
    }
  }

  h1,
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: -1px;
  }
  h2 {
    font-size: 4rem;
  }
`;
