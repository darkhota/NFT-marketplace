const JojoToken = artifacts.require("JojoToken");

module.exports = function(deployer) {
  deployer.deploy(JojoToken);
};
