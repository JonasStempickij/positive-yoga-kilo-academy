import React from 'react';
import { useState } from 'react';
import expandMore from './../assets/icon/expand_more.png';

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='faq-item'>
      <div className='faq-header' onClick={() => setShow(!show)}>
        <h5>{question}</h5>
        <img src={expandMore} alt='expand more' />
      </div>
      <div className={show ? 'faq-answer' : 'hide'}>{answer}</div>
    </div>
  );
};

export default FaqItem;
