const express = require("express");
const { updateOrder } = require("./actions/order");

const app = express.Router();

app.post("/", async (req, res) => {
  console.log("webhook / route", "req", req.body.event);
  console.log("web hook body", req.body.model);
  console.log("web hook data", req.body.entry.users);

  const createHandler = () => {
    switch (req.body.model) {
      case "order": {
        console.log("order created from strapi");
        break;
      }
    }
  };

  const updateHandler = () => {
    switch (req.body.model) {
      case "order": {
        updateOrder(req.body.entry);

        break;
      }
    }
  };

  const deleteHandler = () => {
    switch (req.body.model) {
      case "order": {
        console.log("order deleted from strapi");
        break;
      }
    }
  };

  switch (req.body.event) {
    case "entry.create":
      createHandler();
      break;
    case "entry.update":
      updateHandler();
      break;
    case "entry.delete":
      deleteHandler();
      break;
  }
});

module.exports = app;
