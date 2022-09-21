const { Client } = require("../models");
const nodemailer = require("nodemailer");

// store clients infos and send yhe message to my mail box
const sendMessage = async (req, res) => {
  const client = {
    client_name: req.body.name,
    client_email: req.body.email,
    message: req.body.message,
  };

  if (!client) {
    res.json({ message: "Input is empty! Please check your informations." });
  }
  await Client.create(client).then((response) => {
    if (!response) {
      res.json({ message: "The client not created!" });
    }

    // ------------------------------------------

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "douaa.larif@outlook.fr",
        pass: "douaalarif1997",
      },
    });
    // console.log(transporter);

    const mailOptions = {
      from: `"Client" <douaa.larif@outlook.fr>`,
      to: "doua.larif@gmail.com",
      subject: "Message",
      html: `
            <h3>From your client</h3>
            <p>${client.message}</p>
        `,
    };
    // console.log(mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.json(error.message);
      } else {
        res.status(200).json({ message: "Thank you for contact me!" });
      }
    });
  });
};

// get my clients
const getClients = (req, res) => {};

module.exports = {
  sendMessage,
  getClients,
};
