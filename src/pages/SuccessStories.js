import { useState, useEffect } from 'react';
import testimonials from '../assets/data/testimonials';
import Story from '../components/Story';
import Wrapper from '../assets/wrappers/SuccessStories';
import arrowBack from '../assets/icon/arrow_back.png';
import arrowForward from '../assets/icon/arrow_forward.png';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState([true, false, false]);
  const [currentActive, setCurrentActive] = useState(0);

  const handleClick = (i) => {
    const afterCalc = currentActive + i; // for calculating if its out of bounds
    console.log(afterCalc);
    if (afterCalc > testimonials.length - 1) {
      setCurrentActive(0);
      console.log(afterCalc);
    } else if (afterCalc < 0) {
      setCurrentActive(testimonials.length - 1);
      console.log(afterCalc);
    } else setCurrentActive(afterCalc);
  };

  useEffect(() => {
    let storyList = [false, false, false];
    storyList[currentActive] = true;
    setActiveStory(storyList);
  }, [currentActive]);

  return (
    <Wrapper>
      <h3>Hear success stories from our clients</h3>
      <div className='success-stories'>
        {testimonials.map((story, index) => {
          return (
            <Story key={index} story={story} activeStory={activeStory[index]} />
          );
        })}
      </div>
      <div className='btn-control'>
        <button className='btn-carousel' onClick={() => handleClick(-1)}>
          <img src={arrowBack} alt='arrow back' />
        </button>
        <button className='btn-carousel' onClick={() => handleClick(1)}>
          <img src={arrowForward} alt='arrow forward' />
        </button>
      </div>
      <button className='btn'>Get my plan</button>
    </Wrapper>
  );
};

export default SuccessStories;
