interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.getElementById('students-list');

for (const student of studentsList) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.location}</td>
  `;
  table.appendChild(row);
}