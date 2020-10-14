const BaseModel = require("../db/models/index");
const Feedback = require("../lib/Feedback");
const Sanitizer = require("../lib/Sanitizer");
const { sendMail } = require("../services/mailer");

exports.contactByMail = async (req, res, next) => {
  let feedback;
  let { message, name, emailAddress } = Sanitizer.sanitize(req.body);

  try {
    let admin = (await BaseModel.Admin.findAll({ raw: true }))[0];

    let info = await sendMail({
      to: admin.emailAddress,
      subject: "Online car rentals web App",
      html: `
    <div>
      <p><b>Name: </b> ${name}</p>
      <p><b>Email: </b> ${emailAddress}</p>
      <p>
        <i>${message}</i>
      </p>
    </div>
    <div>
      <cite>Online car rentals web app.</cite>
    </div>
    `,
      from: "<myproject2019@aol.com>",
    });
    feedback = new Feedback("success", true, info);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "We were unable to process your request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};
