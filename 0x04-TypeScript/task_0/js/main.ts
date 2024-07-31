export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: "John",
  lastName: "Matthews",
  age: 23,
  location: "Nairobi",
};

const student_2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
  location: "Nairobi",
};

const studentsList: Array<Student> = [student_1, student_2];

export const renderTable = (students: Array<Student>): void => {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  table.insertAdjacentElement('beforeend', headerRow);

  headerRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headerRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of students) {
    const row = document.createElement("tr");
    row.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    row.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    table.insertAdjacentElement("beforeend", row);
  }
  
  document.body.insertAdjacentElement('beforeend', table);
  }

renderTable(studentsList);
