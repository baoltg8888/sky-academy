// Solution for issue #1292
// Generated automatically by Baobot

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/rewards', (req, res) => {
  const { fastestTableSpeed, listWordsSecure } = req.body;

  let reward = 0;
  if (fastestTableSpeed) {
    reward += 100;
  }
  if (listWordsSecure) {
    reward += 100;
  }

  res.json({ reward });
});

app.listen(3000, () => {
  console.log('Rewards API listening on port 3000');
});


This script sets up a simple API endpoint at `/api/rewards` that accepts a JSON payload with `fastestTableSpeed` and `listWordsSecure` properties. It calculates a reward based on these properties and returns the reward amount in the response. This is a basic example and may need to be integrated into the existing application and database structure.