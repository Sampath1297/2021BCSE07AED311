const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/:numbers', (req, res) => {
  const numbersStr = req.params.numbers;

  try {
    const numbers = JSON.parse(numbersStr);

    if (!Array.isArray(numbers) || numbers.length === 0 || numbers.some(isNaN)) {
      return res.status(400).send({ error: 'Invalid input. Ensure you pass an array of numbers.' });
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;

    res.send({ average });
  } catch (error) {
    res.status(400).send({ error: 'Invalid input. Ensure you pass a valid array of numbers in the URL.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
