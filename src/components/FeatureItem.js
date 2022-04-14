import React from 'react';

const FeatureItem = ({ feature }) => {
  const { icon, featureName, featureDescription } = feature;
  return (
    <div className='feature-row'>
      <img src={icon} alt='icon' />
      <div className='feature-content'>
        <h5>{featureName}</h5>
        <p className='subtitle'>{featureDescription}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
