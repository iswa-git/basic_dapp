require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "9ba2dc2104614096a9eca911765f0330";
const ALCHEMY_URL = "https://goerli.infura.io/v3/9ba2dc2104614096a9eca911765f0330";

const GOERLI_PRIVATE_KEY = "ee831bedfc5cbb5b2579b3103d0d71ab85fa558d93e601cd8a5b29c4711fc8ba";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  
  networks: {
    hardhat: {
    chainId: 1337
  },
    goerli: {
      url: `${ALCHEMY_URL}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
