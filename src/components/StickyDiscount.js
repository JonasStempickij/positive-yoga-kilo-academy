import React from 'react';
import Wrapper from '../assets/wrappers/StickyDiscount';
import discount from '../assets/icon/mdi_local_offer.png';

const StickyDiscount = () => {
  return (
    <Wrapper>
      <img src={discount} alt='discount icon' />
      <h5>
        <b>50% </b> discount only valid for <b>00:15:49</b>
      </h5>
    </Wrapper>
  );
};

export default StickyDiscount;
