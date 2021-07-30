import styled from 'styled-components';
import { Props } from './HR';

export const StyledHr = styled.hr<Props>`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid
    ${({ theme }) =>
      theme.mode === 'dark' ? theme.borderGrayColor : theme.primaryWhite};

  margin: ${({ margin }) => margin || '1rem 0'};
`;
