import React from 'react';
import star from '../assets/icon/star.png';

const Stars = () => {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(star);
  }
  return (
    <>
      {stars.map((star, index) => {
        return <img src={star} alt='star icon' key={index} />;
      })}
    </>
  );
};

export default Stars;
