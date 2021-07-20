import React from 'react';
import CardHeader from '../CardHeader/CardHeader';
import * as Styled from './styles.DescriptionCard';

export interface Props {
  description: string;
}
/**
 *@function Description Card
 *@param {string} description - product Description
 *@returns {JSX.Element} - Rendered Description Card component
 */
const DescriptionCard = ({ description }: Props): JSX.Element => {
  return (
    <Styled.CardContainer>
      <CardHeader headerText="Description" />
      <Styled.Description>{description}</Styled.Description>
    </Styled.CardContainer>
  );
};

export default DescriptionCard;
