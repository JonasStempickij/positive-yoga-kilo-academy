import React from 'react';
import circle from '../assets/icon/circle.png';
import checkCircle from '../assets/icon/mdi_check_circle.png';

const PlanOption = ({ plan, active, handleActive, index }) => {
  const { discount, duration, price, oldPrice, periodPrice } = plan;

  return (
    <div
      className={active ? 'plan-option active' : 'plan-option'}
      onClick={() => handleActive(index)}
    >
      <div className='plan-content'>
        <div className='plan-title'>
          <h5>{duration} month plan</h5>
          {discount ? <span className='discount'>{discount}</span> : ''}
        </div>
        <div>
          <div className='plan-monthly'>
            <h2>{price}</h2> / month
          </div>
          <div className='plan-price'>
            {duration === 1 ? '' : <p className='plan-old-price'>{oldPrice}</p>}
            {duration === 1 ? (
              ''
            ) : (
              <span className='highlight'>{periodPrice}</span>
            )}
            {duration === 1
              ? 'Billed monthly'
              : `\u00A0billed every ${duration} months`}
          </div>
        </div>
      </div>
      <img
        src={active ? checkCircle : circle}
        alt={active ? 'checked circle' : 'circle'}
      />
    </div>
  );
};

export default PlanOption;
