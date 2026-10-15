// Solution for issue #1176
// Generated automatically by Baobot

// sky-academy-times-tables.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/times-table', (req, res) => {
    const { number1, number2 } = req.body;
    const result = number1 * number2;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Times-table server listening at http://localhost:${port}`);
});


To run this server, save the above code in a file named `sky-academy-times-tables.js` and execute it using Node.js:
bash
node sky-academy-times-tables.js


This server will be available at `http://localhost:3000/times-table` and will handle POST requests to create a times-table result endpoint.