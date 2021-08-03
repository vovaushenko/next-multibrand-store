import React from 'react';
import { MdStar } from 'react-icons/md';
import * as Styled from './styles.FiveStars';

export interface Props {
  rating: number;
}
/**
 *Renders component which map rating (1-5) to number of stars
 *@function FiveStars
 *@param {number} rating - rating from 1 to 5
 *@returns {JSX.Element} - Rendered FiveStars component
 */
const FiveStars = ({ rating }: Props): JSX.Element => {
  const fiveStars = [];
  for (let i = 0; i < 5; i++) {
    fiveStars.push(
      <MdStar className={i < rating ? 'icon active-icon' : 'icon'} />
    );
  }

  return (
    <Styled.Container>
      {fiveStars.map((icon, id) => (
        <Styled.Star key={id}>{icon}</Styled.Star>
      ))}
    </Styled.Container>
  );
};

export default FiveStars;
