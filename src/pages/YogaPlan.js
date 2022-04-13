import React from 'react';
import planList from '../assets/data/planList';
import Wrapper from '../assets/wrappers/YogaPlan';
import PlanOption from '../components/PlanOption';

const YogaPlan = () => {
  return (
    <Wrapper>
      <h3>
        Choose your plan and get <span>7 days free trial</span>
      </h3>
      <div className='plan-option-list'>
        {planList.map((plan, index) => {
          return (
            <PlanOption
              key={index}
              price={plan.price}
              duration={plan.duration}
              discount={plan.discount}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default YogaPlan;
