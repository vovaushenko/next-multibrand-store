import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: ${({ theme }) => theme.secondaryBg};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    cursor: pointer;
    font-size: 1.25rem;
    &:hover {
      color: ${({ theme }) => theme.secondaryGolden};
    }
  }
`;
