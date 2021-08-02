import React, { useCallback, useState } from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';
import * as Styled from './styles.Rating';

/**
 *Renders Rating component, to allow customers to set rating from 1 to 5 on products, measured in stars
 *@function Rating
 *@returns {JSX.Element} - Rendered Rating component
 */
const Rating = (): JSX.Element => {
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

  const handleClick = useCallback((id) => {
    setRating(id + 1);
  }, []);

  return (
    <Styled.Container>
      {generateRating().map((star, id) => (
        <div key={id} onClick={() => handleClick(id)}>
          {star}
        </div>
      ))}
    </Styled.Container>
  );
};

export default Rating;
