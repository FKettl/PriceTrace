const Prize = artifacts.require("Prize");
API_URL = "http://localhost:5173";
module.exports = function (deployer) {
  deployer.deploy(Prize, "Prize", "PRI", API_URL);
};
