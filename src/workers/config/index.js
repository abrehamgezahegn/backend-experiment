const REDIS = process.env.REDIS_URL;

const Redis = require("ioredis");

const client = new Redis(REDIS);
const subscriber = new Redis(REDIS);
const opts = {
  createClient: (type) => {
    switch (type) {
      case "client":
        return client;
      case "subscriber":
        return subscriber;
      default:
        return new Redis(REDIS);
    }
  },
};

export default opts;
