require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    holesky: {
      url: `https://eth-holesky.g.alchemy.com/v2/6Es0VXwtGNhu_dF52IlSPTESHU_JjzZ4`, // Use your Infura API key
      accounts: [`28f7d0c0eebcf2da4a52817eec569b470d3be310600c4d4d0d70dbedc708902b`], // Use your wallet's private key
      chainId: 17000, // Chain ID for Holesky
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
