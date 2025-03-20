const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend API listening on port ${port}`);
});
