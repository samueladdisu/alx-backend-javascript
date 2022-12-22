export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    } else {
      this._length = length;
    }

    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students) && !(students.every((item) => typeof item === 'string'))) {
      throw new Error('Students must be an array of string');
    } else {
      this._students = students;
    }
  }

  setName(name) {
    this._name = name;
  }

  setLength(length) {
    this._length = length;
  }

  setStudents(students) {
    this._students = students;
  }

  getName() {
    return this._name;
  }

  getLength() {
    return this._length;
  }

  getStudents() {
    return this._students;
  }
}
