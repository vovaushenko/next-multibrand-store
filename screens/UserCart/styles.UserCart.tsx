import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    padding: 0;
  }
`;

const backgroundAndBorder = css`
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1.25rem;
`;

export const LeftColumn = styled.section`
  ${backgroundAndBorder}
  flex: max(0.7, 1);
`;
export const RightColumn = styled.aside`
  ${backgroundAndBorder}
  flex:0.3;
  max-height: 30vh;

  @media ${({ theme }) => theme.media.tablet} {
    max-height: 50vh;
    p {
      margin-bottom: 1rem;
    }
  }
`;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  button {
    width: 100%;
  }
`;

export const Total = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const PaymentWrapper = styled.div`
  margin-top: 2rem;
  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 1rem;
  }
`;

export const SneakerManiac = styled.a`
  display: inline-block;
  width: 100%;
  margin: 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondaryGolden};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
