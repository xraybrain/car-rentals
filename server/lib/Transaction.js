module.exports = class Transaction {
  constructor(hireId, paymentRef, status, amountPaid) {
    this.hireId = hireId;
    this.paymentRef = paymentRef;
    this.status = status;
    this.amountPaid = amountPaid;
  }
};
