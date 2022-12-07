const express = require('express');
const app = express();
const data = require('./data.json');
const notes = data.notes;
const jsonMiddleware = express.json();
const fs = require('fs');
app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const notesArray = Object.values(notes);
  res.status(202);
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const errorMessage = { error: 'id must be a positive integer' };
  const notFound = { error: `cannot find note with id ${id}` };
  if (id <= 0 || isNaN(id)) {
    res.status(400);
    res.json(errorMessage);
  } else {
    if (!(data.notes[id])) {
      res.status(404);
      res.json(notFound);
    } else {
      res.status(200);
      res.json(data.notes[id]);
    }
  }
});

app.post('/api/notes', (req, res) => {
  if ('content' in req.body) {
    const newContent = req.body;
    newContent.id = data.nextId;
    data.notes[data.nextId] = newContent;
    data.nextId++;
    const dataJSON = JSON.stringify(data, null, 2);
    writeFile(dataJSON, res, 201, newContent);
  } else if (!('content' in req.body)) {
    const error = { error: 'content is a required field' };
    res.status(400);
    res.json(error);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const errorMessage = { error: 'id must be a positive integer' };
  const notFound = { error: `cannot find note with id ${id}` };
  if (id <= 0 || isNaN(id)) {
    res.status(400);
    res.json(errorMessage);
  } else {
    if (id in data.notes) {
      delete data.notes[id];
      const dataJSON = JSON.stringify(data, null, 2);
      writeFile(dataJSON, res, 201);
    } else if (!(id in data.notes)) {
      res.status(404);
      res.json(notFound);
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const errorMessage = { error: 'content is a required field' };
  const errorId = { error: 'id must be a positive integer' };
  const notFound = { error: `cannot find note with id ${id}` };
  if (!('content' in req.body)) {
    res.status(400);
    res.json(errorMessage);
  } else if (id <= 0 || isNaN(id)) {
    res.status(400);
    res.json(errorId);
  } else if (!(data.notes[id])) {
    res.status(404);
    res.json(notFound);
  } else {
    const update = req.body;
    data.notes[id].content = update.content;
    const dataJSON = JSON.stringify(data, null, 2);
    writeFile(dataJSON, res, 200, data.notes[id]);
  }
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});

function writeFile(jsonData, response, statusNumber, dataResponse) {
  fs.writeFile('data.json', jsonData, err => {
    if (err) {
      const writeError = { error: 'an unexpected error occured' };
      response.status(500).json(writeError);
      console.error(err);
      process.exit(1);
    } else {
      response.status(statusNumber);
      response.json(dataResponse);
    }
  });
}
