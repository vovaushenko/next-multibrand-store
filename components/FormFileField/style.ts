import styled from 'styled-components';

export const FileField = styled.div`
  width: 100%;
  input {
    height: 3rem;
    padding: 0.5rem;
    width: 100%;
    background: ${({ theme }) => theme.dashboardGrayCard};
    border: 1px solid ${({ theme }) => theme.borderGrayColor};
    color: ${({ theme }) => theme.primaryWhite};
    border-radius: ${({ theme }) => theme.borderRadius};

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
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
`;
