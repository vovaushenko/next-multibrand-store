import styled from 'styled-components';

export const FileField = styled.div`
  width: 100%;
  input {
    background: ${({ theme }) => theme.lightestGray};
    height: 3rem;
    padding: 0.5rem;
    border-radius: 5px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.secondaryBg};
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryGolden};
      border-color: ${({ theme }) => theme.primaryGolden};
    }
  }

  input {
    ::-webkit-file-upload-button {
      cursor: pointer;
      margin-left: 2rem;
      background-color: ${({ theme }) => theme.primaryGolden};
      color: ${({ theme }) => theme.primaryWhite};
      font-family: inherit;
      border: none;
      padding: 0.5rem 1.125rem;
    }
  }
`;
