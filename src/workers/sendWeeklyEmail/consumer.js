const sendWeeklyEmail = (job, done) => {
  console.log("send email to", job.data.to);
  console.log("send email job done");
  done();
};

module.exports = sendWeeklyEmail;
