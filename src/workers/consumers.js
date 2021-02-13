const Queue = require("bull");

const updateUser = new Queue("update-user");
const sendEmail = new Queue("send-weekly-email");

updateUser.process(`${__dirname}/userUpdate/consumer.js`);
sendEmail.process(`${__dirname}/sendWeeklyEmail/consumer.js`);
