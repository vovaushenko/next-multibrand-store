import styled from 'styled-components';

export const Label = styled.label`
  cursor: pointer;
  display: block;
  margin-bottom: 0.4rem;
  padding-left: 1.2rem;

  /* Checked */
  .check__input:checked + .check__box {
    box-shadow: 0 0 0 0.2em ${({ theme }) => theme.secondaryGolden};
    background-image: url('/images/check.svg');
  }

  /* Focused */
  .check__input:focus + .check__box {
    box-shadow: 0 0 0 0.1em ${({ theme }) => theme.activeGreen},
      0 0 0 0.2em ${({ theme }) => theme.secondaryGolden};
  }

  /* Disabled */
  .check__input:disabled + .check__box {
    box-shadow: 0 0 0 0.1em #9b9b9b;
  }

  .check__input:checked:disabled + .check__box {
    background-color: #9b9b9b;
  }
`;
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export const CheckBox = styled.span`
  position: absolute;
  margin-top: 0.2em;
  margin-left: -1.5rem;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  box-shadow: 0 0 0 0.1em ${({ theme }) => theme.primaryGolden};
  border-radius: 50%;
`;
