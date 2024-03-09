
import React from 'react';

const LoremDisplay = ({ paragraphs }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default LoremDisplay;