import styled from 'styled-components';

export const Container = styled.div``;

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
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  background-color: ${({ theme }) => theme.primaryGolden};
  border-radius: 0 5px 5px 0;
  border: none;

  .search-icon {
    font-size: 1.25rem;
  }
`;
