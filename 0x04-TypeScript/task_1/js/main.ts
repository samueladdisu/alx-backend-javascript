interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
};

function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}
