const BaseModel = require("../db/models/index");

exports.execTransaction = async (transactionData, sqlTransaction) => {
  let transaction = await BaseModel.Transaction.create(transactionData, {
    raw: true,
    transaction: sqlTransaction,
  });
  transaction.dataValues.id = transaction.dataValues.null;
  return transaction;
};
