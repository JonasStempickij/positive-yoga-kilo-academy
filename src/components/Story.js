import React from 'react';
import Stars from './Stars';

const Story = ({ story, activeStory }) => {
  const { nameAndAge, city, img, text } = story;
  return (
    <section className={activeStory ? 'story' : 'story hide'}>
      <div className='title'>
        <h5>{nameAndAge}</h5>
        <p className='caption-mobile'>{city}</p>
      </div>
      <div className='stars'>
        <Stars />
      </div>
      <img src={img} alt='image' />
      <p className='paragraph-regular'>{text}</p>
    </section>
  );
};

export default Story;
