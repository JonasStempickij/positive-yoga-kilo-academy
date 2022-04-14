import React from 'react';
import planList from '../assets/data/planList';
import featureList from '../assets/data/featureList';
import payment from '../assets/images/payment.png';
import Wrapper from '../assets/wrappers/YogaPlan';
import PlanOption from '../components/PlanOption';
import FeatureItem from '../components/FeatureItem';
import { useState } from 'react';

const YogaPlan = () => {
  const [active, setActive] = useState([true, false, false]);

  const handleActive = (index) => {
    let activeList = [false, false, false];
    activeList[index] = true;
    setActive(activeList);
  };

  return (
    <Wrapper>
      <section>
        <h3>
          Choose your plan and get{' '}
          <span className='highlight'>7 days free trial</span>
        </h3>
        <div className='plan-option-list'>
          {planList.map((plan, index) => {
            return (
              <PlanOption
                key={index}
                plan={plan}
                handleActive={handleActive}
                index={index}
                active={active[index]}
              />
            );
          })}
        </div>
        <button className='btn'>Get your plan</button>
        <p className='caption-mobile'>
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </p>
        <p className='caption-mobile'>
          By choosing a payment method you agree to the <a href='#'>T&Cs</a> and{' '}
          <a href='#'>Privacy Policy</a>
        </p>
        <img
          src={payment}
          alt='guaranteed safe checkout'
          className='safe-checkout'
        />
      </section>
      <section>
        <h3>What's in my program?</h3>
        <div className='feature-list'>
          {featureList.map((feature, index) => {
            return <FeatureItem feature={feature} key={index} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default YogaPlan;
