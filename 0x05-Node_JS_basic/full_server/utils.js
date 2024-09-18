const fs = require('fs');

function processFile(data) {
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);
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
  return fields;
}

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fields = processFile(data);
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
