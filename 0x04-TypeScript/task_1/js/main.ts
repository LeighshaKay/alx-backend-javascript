// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Creating a teacher and a director
const teacher3: Teacher = {
  firstName: 'Hilton',
  fullTimeEmployee: false,
  lastName: 'Oguda',
  location: 'Kisumu',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'Hilton',
  lastName: 'Oguda',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 21,
};
console.log(director1);

// returns a Teacher's name in this format: K. Owino
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Felix', 'Allan'));

// class description interface
interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// constructor description interface
interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

// Creating class and constructor through interfaces 
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// creating instance of StudentClass
const studentClass: StudentClass = new StudentClass('sofia', 'cheung');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
