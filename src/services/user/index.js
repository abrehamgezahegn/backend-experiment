const { GetOne, GetOneLoader } = require("./queries/getOne");
const { GetAll } = require("./queries/getAll");
const { Create } = require("./mutations/create");

module.exports = {
  GetOne,
  GetAll,
  Create,
  GetOneLoader,
};
