const Queue = require("bull");

const sendEmail = new Queue("send-weekly-email");

const sendWeeklyEmail = async (data) => {
  console.log("adding email job ");
  return await sendEmail.add(data, {
    repeat: {
      every: 2000,
      limit: 2,
    },
    removeOnComplete: true,
  });
};

module.exports = sendWeeklyEmail;
