const express = require('express');

const app = express();

app.use((req, res) => {
  // console.log(req.method);
  res.send('hi there');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
