const { Client } = require("../models");
const nodemailer = require("nodemailer");

// store clients infos and send yhe message to my mail box
const sendMessage = async (req, res) => {
  let client = {
    client_name: req.body.name,
    client_email: req.body.email,
    message: req.body.message,
  };

  if (!client) {
    res.json({ message: "Input is empty! Please check your informations." });
  }

  await Client.findOne({
    client_name: client.client_name,
    client_email: client.client_email,
  }).then((myClient) => {
    if (!myClient) {
      Client.create(client).then((response) => {
        if (!response) {
          res.json({ message: "The client not created!" });
        }
      });
    }
    // send mail
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "douaa.larif@outlook.fr",
        pass: "douaalarif1997",
      },
    });

    const mailOptions = {
      from: `"Client" <douaa.larif@outlook.fr>`,
      to: "doua.larif@gmail.com",
      subject: "Message",
      html: `
          <h3>From your client</h3>
          <p>${client.message}</p>
      `,
    };

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
const getClients = async (req, res) => {
  await Client.find().then((clients) => {
    if (!clients) {
      res.json({ message: "Clients not found!" });
    }
    res.status(200).json(clients);
  });
};

module.exports = {
  sendMessage,
  getClients,
};
