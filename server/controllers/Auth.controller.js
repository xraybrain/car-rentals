const BaseModel = require("../db/models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Feedback = require("../lib/Feedback");

module.exports.login = async (req, res, next) => {
  const { emailAddress, password, userType } = req.body;

  let model;
  switch (userType) {
    case "customer":
      model = "Customer";
      break;
    case "admin":
      model = "Admin";
      break;
    default:
      model = "Customer";
  }
  let user = await BaseModel[model].findOne({ where: { emailAddress } });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Wrong username and password combination." });
  }

  // verify password
  let isMatch = bcrypt.compareSync(password, user["password"]);

  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "Wrong username and password combination." });
  }

  if (model == "Customer") {
    await BaseModel.Notification.create({
      content: `${user.name} signed into ${
        user.gender.toLowerCase() == "male" ? "his" : "her"
      } account.`,
      type: "info",
    });
  }

  let token = jwt.sign(
    { user: { id: user["id"], type: model } },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  res.json({ token });
};

module.exports.getCurrentUser = async (req, res, next) => {
  const auth = req.headers.authorization;
  let feedback;

  if (!auth) {
    feedback = new Feedback("not authorized", false, null);
    return res.status(403).json(feedback);
  }

  const token = auth.split(" ")[1];
  const decoded = jwt.decode(token);
  if (Date.now() / 1000 > decoded["exp"]) {
    feedback = new Feedback("expired token", false, null);
    return res.status(403).json(feedback);
  }
  model = decoded["user"]["type"];
  let id = decoded["user"]["id"];

  try {
    let user = await BaseModel[model].findOne({ where: { id } });
    feedback = new Feedback("success", true, user);
    return res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback("we were unable to process request", false, null);
    return res.status(500).json(feedback);
  }
};

exports.changePassword = async (req, res, next) => {
  let { password } = req.body;
  const auth = req.headers.authorization;
  let feedback;

  if (!auth) {
    feedback = new Feedback("not authorized", false, null);
    return res.status(403).json(feedback);
  }

  const token = auth.split(" ")[1];
  const decoded = jwt.decode(token);
  if (Date.now() / 1000 > decoded["exp"]) {
    feedback = new Feedback("expired token", false, null);
    return res.status(403).json(feedback);
  }
  model = decoded["user"]["type"];
  let id = decoded["user"]["id"];

  let salt = bcrypt.genSaltSync(12);
  let hash = bcrypt.hashSync(password, salt);

  try {
    let result = await BaseModel[model].update(
      { password: hash },
      { where: { id } }
    );
    if (model == "Customer") {
      let customer = await BaseModel[model].findOne({ where: { id } });
      await BaseModel.Notification.create({
        content: `${customer.name} changed  ${
          customer.gender.toLowerCase() == "male" ? "his" : "her"
        } account password.`,
        type: "warning",
      });
    }
    feedback = new Feedback("success", true, result);
    return res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback("not authorized", false, null);
    return res.status(500).json(feedback);
  }
};
