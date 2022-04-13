import React from 'react';
import expandMore from './../assets/icon/expand_more.png';

const FaqItem = ({ question, answer }) => {
  return (
    <div className='faq-item'>
      <div className='faq-header'>
        <div className='faq-question'>{question}</div>
        <img src={expandMore} alt='expand more' />
      </div>
      <div className='faq-answer'>{answer}</div>
    </div>
  );
};

export default FaqItem;
