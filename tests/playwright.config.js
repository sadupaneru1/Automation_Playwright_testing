
module.exports = {
  workers: 1, // ensures tests run one-by-one
  timeout: 30000, // optional: sets test timeout to 30 seconds
  use: {
    headless: true, // or false if you want to see browser
  },
};
