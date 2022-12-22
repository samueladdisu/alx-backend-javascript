export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new Error('code must be a string');
    } else {
      this._code = val;
    }
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new Error('name must be a string');
    } else {
      this._name = val;
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
