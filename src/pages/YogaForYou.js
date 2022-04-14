import React from 'react';
import benefitList from '../assets/data/benefitList';
import checkCircle from '../assets/icon/check_circle_outline.png';
import phoneOne from '../assets/images/phone-1.png';
import phoneTwo from '../assets/images/phone-2.png';
import Wrapper from '../assets/wrappers/YogaForYou';

const YogaForYou = () => {
  return (
    <Wrapper>
      <section>
        <h3>Is Positive Yoga right for me?</h3>
        <div className='benefit-list'>
          {benefitList.map((item, index) => {
            return (
              <div className='benefit-row' key={index}>
                <img src={checkCircle} alt='check circle' />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h3>Start your yoga journey now!</h3>
        <div className='phone-box'>
          <img src={phoneOne} alt='phone one' className='phone-one' />
          <img src={phoneTwo} alt='phone two' className='phone-two' />
        </div>
      </section>
    </Wrapper>
  );
};

export default YogaForYou;
