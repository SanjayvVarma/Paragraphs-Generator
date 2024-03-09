
import React, { useState } from 'react';
import LoremDisplay from './LoremDisplay';
import loremData from '../data/loremData.json';
import './LoremGenerator.css'

const LoremGenerator = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [error, setError] = useState('');
  const [numParagraphs, setNumParagraphs] = useState('');

  const generateLorem = () => {
    const num = parseInt(numParagraphs, 10);

    if (isNaN(num) || num <= 0) {
      alert(' Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀');
      setParagraphs([]);
    } else if (num > 8) {
      alert(' Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀');
      setParagraphs([]);
    } else {
      setError('');
      const loremText = loremData.slice(0, num);
      setParagraphs(loremText);
    }
  };

  return (
    <div className="container">
    <div>
      <label htmlFor="numParagraphs">Number of Paragraphs: </label>
      <input
        type="number"
        id="numParagraphs"
        value={numParagraphs}
        onChange={(e) => setNumParagraphs(e.target.value)}
      />
      <button onClick={generateLorem}>Generate</button>
    </div>
    {error && <div className="error-message">{error}</div>}
    <LoremDisplay paragraphs={paragraphs} />
  </div>
  );
};

export default LoremGenerator;



