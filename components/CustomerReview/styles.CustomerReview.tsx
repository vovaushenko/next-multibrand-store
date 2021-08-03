import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 100%;
`;

export const ReviewHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ClientName = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryGolden};
  text-transform: capitalize;
`;

export const Time = styled.time``;

export const ReviewBody = styled.div``;

export const ReviewTitle = styled.h5`
  text-transform: capitalize;
  margin-top: 1rem;
`;

export const ReviewText = styled.p`
  margin-top: 1rem;
`;

export const Rating = styled.div``;
