export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id);
      if (grades) {
        return { ...student, grade: grades.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
