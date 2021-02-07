const bodyParser = require("body-parser");
const cors = require("cors");
const webhookRoutes = require("./webhookRoutes");

const webhook = (app) => {
  console.log("webhook initiated");
  app.use(bodyParser.json());
  app.use(cors());

  app.use("/webhook", webhookRoutes);

  app.get("/", (req, res) => {
    console.log("webhook running");
    res.json("Webhook running");
  });
};

module.exports = webhook;
