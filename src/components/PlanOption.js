import React from 'react';

const PlanOption = ({ duration, price, discount }) => {
  return (
    <div className='plan-option'>
      <div className='plan-content'>
        <div className='plan-duration'>
          <h5>{duration} month plan</h5>
          {discount ? <span className='discount'>Save {discount}%</span> : ''}
        </div>
        <div className='plan-monthly'>
          <h2>{price}</h2> / month
        </div>
        <div className='plan-price'>
          <p className='plan-old-price'>
            {duration === 1 ? '' : '$' + duration * 19.99}
          </p>
          <p>
            {duration === 1
              ? 'Billed monthly'
              : <span className='highlight'>{duration * price}</span> +
                'billed every' +
                { duration } +
                'months'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanOption;
