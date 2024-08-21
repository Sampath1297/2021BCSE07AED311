import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    if (!numbers) return;

    const numArray = numbers.split(',').map(num => parseFloat(num.trim()));
    const sum = numArray.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numArray.length;

    setAverage(avg);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Average Calculator</h2>
      <input
        type="text"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter numbers separated by commas"
        style={{ width: '300px', padding: '5px' }}
      />
      <br />
      <button onClick={calculateAverage} style={{ margin: '10px', padding: '5px 10px' }}>
        Calculate Average
      </button>
      {average !== null && (
        <div>
          <h3>Average: {average}</h3>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
