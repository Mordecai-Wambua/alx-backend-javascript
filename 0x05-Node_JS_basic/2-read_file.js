const fs = require('fs');

function processFile(data) {
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);
  console.log(`Number of students: ${students.length}`);
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
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(
        ', ',
      )}`,
    );
  }
}

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    processFile(data);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
