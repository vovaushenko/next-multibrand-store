import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.borderGrayColor};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
