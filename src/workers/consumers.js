const Queue = require("bull");
const redisConfig = require("./config");

const updateUser = new Queue("update-user", redisConfig);
const sendEmail = new Queue("send-weekly-email", redisConfig);

updateUser.process(`${__dirname}/userUpdate/consumer.js`);
sendEmail.process(`${__dirname}/sendWeeklyEmail/consumer.js`);
