const PriceTraceV1 = artifacts.require("PriceTraceV1");

module.exports = function (deployer) {
  deployer.deploy(PriceTraceV1);
};
