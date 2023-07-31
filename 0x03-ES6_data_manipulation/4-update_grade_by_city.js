export default function updateStudentGradeByCity(array = [], city = '', newGrades = []) {
  return array.filter((obj) => obj.location === city)
    .map((obj) => {
      const student = obj;
      student.grade = 'N/A';
      for (const newGrade of newGrades) {
        if (newGrade.studentId === student.id) {
          student.grade = newGrade.grade;
        }
      }
      return student;
    });
}
