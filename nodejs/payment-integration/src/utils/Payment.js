const Cielo = require('./Cielo');
const Pagarme = require('./Pagarme');

class Payment {
  constructor(operatorName) {
    const operators = {
      cielo: Cielo,
      pagarme: Pagarme
    };
    this.operator = operators[operatorName];
  }
}

module.exports = Payment;
