var API_KEY = "608cb0b8ef258d8ec00d5de5e986e92f-9ad3eb61-ac98dc61";
var DOMAIN = "sandbox13b93aac3ac7401381895703fc8e465e.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });
sendEmail = async (payload) => {
  const data = {
    from: "Excited User <me@samples.mailgun.org>",
    to: "auqibwani9988@gmail.com",
    subject: "Hello",
    text: "Give your chakej on rent",
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
};

sendEmail();
