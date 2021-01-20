const users = [
  {
    id: "123saasd",
    firstName: "Kevin",
    lastName: "Hart",
    email: "kevin@scholl.com",
    phoneNumber: "+01242392131",
  },
  {
    id: "123s24asdfasd",
    firstName: "Elon",
    lastName: "Musk",
    email: "elon@nuero.com",
    phoneNumber: "+01292342131",
  },
  {
    id: "123sa923hbuidasd",
    firstName: "Jordan",
    lastName: "Peterson",
    email: "jordan@dominant.com",
    phoneNumber: "+0123492131",
  },
];

exports.GetUser = async (args) => {
  return users[0];
};
