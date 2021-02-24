var NextToken = artifacts.require("NextToken");

module.exports = async function(deployer) {
    await deployer.deploy(NextToken);
};
