export default function updateStudentGradeByCity(list, city, newGrade) {
  const students = list.filter((student) => student.location === city);
  students.forEach((student) => {
    const grade = newGrade.find((grade) => grade.studentId === student.id);
    if (grade) {
      student.grade = grade.grade;
    } else {
      student.grade = 'N/A';
    }
  });
  return students;
}
