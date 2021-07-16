import styled from 'styled-components';

export const Container = styled.aside`
  position: sticky;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 35%;
  padding: 1.25rem;
  overflow: hidden;
  background: ${({ theme }) => theme.secondaryBg};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
