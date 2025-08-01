enum Grade {
  Excellent = 1, // Sehr gut
  Good, // Gut
  Satisfactory, // Befriedigend
  Sufficient, // Ausreichend
  Poor, // Mangelhaft
  Failed, // Ungenügend
}

type Student = {
  name: string; // Name of the student
  age: number; // Age of the student
  courses: string[]; // List of courses the student is enrolled in
  isEnrolled: boolean; // Enrollment status of the student
  grades: (number | undefined)[]; // Array of grades the student has received
};

const student1: Student = {
  name: "John Doe",
  age: 20,
  courses: ["Math", "Science", "History"],
  isEnrolled: true,
  grades: [Grade.Sufficient, undefined, Grade.Satisfactory, Grade.Satisfactory],
};

const student2: Student = {
  name: "Jane Doe",
  age: 22,
  courses: ["Math", "Science", "History"],
  isEnrolled: true,
  grades: [Grade.Satisfactory, Grade.Satisfactory, Grade.Good],
};

const students: Student[] = [student1, student2];

const displayStudentInfo = (student: Student): void => {
  console.group("student info: ");
  console.log(student.name + "( " + student.age + " )");
  console.log("================================ ");
  console.log(
    "Grades: " +
      student.grades
        .map((note) => {
          if (note === undefined) {
            return "*";
          } else return note;
        })
        .join(", ")
  );
  console.groupEnd();
};

displayStudentInfo(student1);
