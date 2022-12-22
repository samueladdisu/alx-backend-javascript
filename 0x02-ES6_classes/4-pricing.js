import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new Error('amount must be number');
    } else {
      this._amount = val;
    }
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new Error('currency must be Currency');
    } else {
      this._currency = val;
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
}
