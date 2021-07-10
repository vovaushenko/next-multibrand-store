import React from 'react';
import { StyledHr } from './style';

export type Props = {
  margin?: string;
};
/**
 * Utility HR divider
 *@function HR
 *@param {string} margin - margin can be adjusted
 *@returns {JSX.Element} - Rendered HR divider component
 */
const HR = ({ margin }: Props): JSX.Element => {
  return <StyledHr margin={margin} />;
};

export default HR;
