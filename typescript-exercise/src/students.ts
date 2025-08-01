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
  takeExam: (grade: number) => boolean;
};

const createStudent = (
  name: string, // Name of the student
  age: number,
  courses: string[],
  isEnrolled: boolean,
  grades: (number | undefined)[]
): Student => {
  return {
    name,
    age,
    courses,
    isEnrolled,
    grades,
    takeExam(grade: number) {
      if (typeof grade === "number" && Object.values(Grade).includes(grade)) {
        this.grades.push(grade);
        return true;
      }
      return false;
    },
  };
};

// const takeExam = (grade: number | undefined): boolean => {
//   const temp: number = 0;
//   if (typeof grade === typeof temp) {
//     this.grades.push(grade);
//     return true;
//   }
//   return false;
// };

const student1 = createStudent(
  "Anton Meier",
  16,
  ["Math", "Science", "History"],
  true,
  [Grade.Sufficient, undefined, Grade.Satisfactory, Grade.Satisfactory]
);

const student2 = createStudent(
  "Berta Müller",
  15,
  ["Math", "Music", "History"],
  true,
  [Grade.Satisfactory, Grade.Satisfactory, Grade.Good]
);

const student3 = createStudent(
  "Cäsar Schmidt",
  17,
  ["Biology", "Science", "Chemie"],
  true,
  [Grade.Satisfactory, Grade.Satisfactory, Grade.Good]
);

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
  console.log("Exam valid: " + student.takeExam(4));
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
