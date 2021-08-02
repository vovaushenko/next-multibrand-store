import React, { useCallback, useState } from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';
import * as Styled from './styles.Rating';

/**
 *Renders Rating component, to allow customers to set rating from 1 to 5 on products, measured in stars
 *@function Rating
 *@returns {JSX.Element} - Rendered Rating component
 */
export interface Props {
  setClientRating: React.Dispatch<React.SetStateAction<number>>;
}

const Rating = ({ setClientRating }: Props): JSX.Element => {
  const [rating, setRating] = useState(0);

  const generateRating = (): JSX.Element[] => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<MdStar className="star-icon" />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<MdStarBorder className="star-icon" />);
    }
    return stars;
  };

  const handleClick = useCallback(
    (id) => {
      setRating(id + 1);
      setClientRating(id + 1);
    },
    [setClientRating]
  );

  return (
    <>
      <Styled.Rating>Rating</Styled.Rating>
      <Styled.StarContainer>
        {generateRating().map((star, id) => (
          <Styled.Star key={id} onClick={() => handleClick(id)}>
            {star}
          </Styled.Star>
        ))}
      </Styled.StarContainer>
    </>
  );
};

export default Rating;
