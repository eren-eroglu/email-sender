const nodemailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: "fred85@ethereal.email",
      pass: "PhdAsGDcYGMQyF36Ew",
    },
  });

  let info = await transporter.sendMail({
    from: "Eren Eroglu <ereneroglu.dev@gmail.com>", // sender address
    to: "vrsozluk@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<h2>Hello world?</h2>", // html body
  });

  res.json(info);
};

module.exports = sendEmail;
