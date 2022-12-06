const express = require('express');
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const gradesArray = Object.values(grades);
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  delete grades[id];
  res.sendStatus(204);
});

app.listen(3000, () => {
  // console.log('express server listening on port 3000');
});
