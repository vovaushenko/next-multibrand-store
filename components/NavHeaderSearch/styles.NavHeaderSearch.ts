import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  appearance: none;
  &::placeholder {
    color: ${({ theme }) => theme.primaryBg};
    font-size: 1rem;
  }
  border-radius: 0.5rem 0 0 0.5rem;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  background-color: ${({ theme }) => theme.primaryGolden};
  border-radius: 0 0.5rem 0.5rem 0;
  border: none;

  .search-icon {
    font-size: 1.25rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
`;

export const Product = styled.article`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.dashboardGrayCard};
  padding: 1rem 2rem;

  p:nth-child(2) {
    color: ${({ theme }) => theme.primaryGolden};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }
`;
