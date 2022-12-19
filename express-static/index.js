const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
