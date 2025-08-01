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
  name: "Anton Meier",
  age: 16,
  courses: ["Math", "Science", "History"],
  isEnrolled: true,
  grades: [Grade.Sufficient, undefined, Grade.Satisfactory, Grade.Satisfactory],
};

const student2: Student = {
  name: "Berta Müller",
  age: 15,
  courses: ["Math", "Music", "History"],
  isEnrolled: true,
  grades: [Grade.Satisfactory, Grade.Satisfactory, Grade.Good],
};

const student3: Student = {
  name: "Cäsar Schmidt",
  age: 17,
  courses: ["Biology", "Science", "Chemie"],
  isEnrolled: true,
  grades: [Grade.Satisfactory, Grade.Satisfactory, Grade.Good],
};

const students: Student[] = [student1, student2, student3];

const displayStudentInfo = (student: Student): void => {
  const nameInfo: string = student.name + "( " + student.age + " )";
  console.group("->");
  console.log(nameInfo);
  console.log("=".repeat(nameInfo.length));
  console.log("Courses: " + student.courses.join(", "));
  console.log(
    "Grades: " +
      student.grades
        .map((note) => {
          if (note === undefined) {
            return "*";
          } else {
            return `Grade.${Grade[note]} (${note})`;
          }
        })
        .join(", ")
  );
  console.groupEnd();
};

// displayStudentInfo(student1);

const getAllStudents = (students: Student[]): void => {
  students.forEach((student) => displayStudentInfo(student));
};

console.log("All students: ");
getAllStudents(students);
