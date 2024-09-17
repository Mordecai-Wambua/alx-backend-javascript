const http = require('http');
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

const app = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
      res.write('Hello Holberton School!');
      res.end();
    }
    if (req.url === '/students') {
      res.write('This is the list of our students\n');
      countStudents(process.argv[2])
        .then((output) => {
          res.write(output);
          res.end();
        })
        .catch((err) => {
          res.write(err.message);
          res.end();
        });
    }
  })
  .listen(1245);

module.exports = app;
