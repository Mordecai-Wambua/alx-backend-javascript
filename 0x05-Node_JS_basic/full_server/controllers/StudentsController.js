import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((output) => {
        const results = [];
        results.push('This is the list of our students');

        for (const field in output) {
          if (field) {
            results.push(
              `Number of students in ${field}: ${
                output[field].length
              }. List: ${output[field].join(', ')}`,
            );
          }
        }
        response.status(200).send(results.join('\n'));
      })
      .catch((err) => {
        response.send(`${err.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const validMajors = ['CS', 'SWE'];
    const { major } = request.params;
    if (!validMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((output) => {
        const data = output[major];
        if (data) {
          response.status(200).send(`List: ${data.join(', ')}`);
        } else {
          response.status(500).send('Cannot load the database');
        }
      })
      .catch((err) => {
        response.send(err.message);
      });
  }
}

export default StudentsController;
