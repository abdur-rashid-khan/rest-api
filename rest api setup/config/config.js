require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.url || process.env.ATLAS_LOCALHOST,
  },
};

module.exports = config;