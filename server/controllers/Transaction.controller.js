const BaseModel = require("../db/models/index");
const Sanitizer = require("../lib/Sanitizer");
const Feedback = require("../lib/Feedback");
const Pager = require("../lib/Pager");

exports.getTransactions = async (req, res, next) => {
  let { page, searchquery } = req.query;
  let feedback;
  page = page || 1;

  try {
    let pager = new Pager("Transaction", 10);
    if (!searchquery) {
      await pager.getItems(page, [
        {
          model: BaseModel.Hire,
          include: [
            { model: BaseModel.Customer },
            { model: BaseModel.Vehicle },
          ],
        },
      ]);
    }

    if (searchquery) {
      let transactions = await BaseModel.Transaction.findAll({
        include: [
          {
            model: BaseModel.Hire,
            include: [
              { model: BaseModel.Customer },
              { model: BaseModel.Vehicle },
            ],
          },
        ],
        where: {
          [BaseModel.Sequelize.Op.or]: [
            {
              paymentRef: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` },
            },
          ],
        },
      });
      pager.results = transactions;
    }
    feedback = new Feedback("success", true, pager);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};
