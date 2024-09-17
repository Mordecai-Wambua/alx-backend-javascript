const express = require('express');
const fs = require('fs');

function processFile(data) {
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);
  let output = `Number of students: ${students.length}\n`;
  const fields = {};

  students.forEach((student) => {
    const details = student.split(',');
    const firstname = details[0];
    const field = details[3];

    if (fields[field]) {
      fields[field].push(firstname);
    } else {
      fields[field] = [firstname];
    }
  });

  for (const [field, names] of Object.entries(fields)) {
    output += `Number of students in ${field}: ${
      names.length
    }. List: ${names.join(', ')}\n`;
  }
  return output;
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(processFile(data));
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
app.listen(1245);

module.exports = app;
