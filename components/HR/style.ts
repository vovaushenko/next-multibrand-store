import styled from 'styled-components';
import { Props } from './HR';

export const StyledHr = styled.hr<Props>`
  display: block;
  height: 1px;
  border: 0;
  border-top: 0.5px solid ${({ theme }) => theme.darkGray};
  margin: ${({ margin }) => margin || '1rem 0'};
`;
