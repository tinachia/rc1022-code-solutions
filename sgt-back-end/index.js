const express = require('express');
const app = express();
const pg = require('pg');
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const errors = {
  studentName: { error: 'name is a required field' },
  course: { error: 'course is a required field' },
  score: { error: 'score is a required field' },
  integer: { error: 'score must be an integer between 0 and 100' },
  grade: { error: 'grade does not exist' },
  invalid: { error: 'grade is invalid' },
  unexpected: { error: 'An unexpected error occured' }
};

app.get('/api/grades', (req, res) => {
  const sql = `
     select *
     from "grades"
  `;
  db.query(sql)
    .then(result => {
      const gradesArray = Object.values(result.rows);
      res.status(200).json(gradesArray);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(errors.unexpected);
    });
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  if (!('name' in newGrade)) {
    res.status(400).json(errors.studentName);
  } else if (!('course' in newGrade)) {
    res.status(400).json(errors.course);
  } else if (!('score' in newGrade)) {
    res.status(400).json(errors.score);
  } else if (isNaN(newGrade.score) || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json(errors.integer);
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;
    const params = [newGrade.name, newGrade.course, newGrade.score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(errors.unexpected);
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const update = req.body;
  const gradeId = req.params.gradeId;
  if (!('name' in update)) {
    res.status(400).json(errors.studentName);
  } else if (!('course' in update)) {
    res.status(400).json(errors.course);
  } else if (!('score' in update)) {
    res.status(400).json(errors.score);
  } else if (isNaN(update.score) || update.score < 0 || update.score > 100) {
    res.status(400).json(errors.integer);
  } else {
    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *
    `;
    const params = [update.name, update.course, update.score, gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json(errors.grade);
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(errors.unexpected);
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json(errors.invalid);
  } else {
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json(errors.grade);
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(errors.unexpected);
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
