require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/U75YuhDgv5i72eNW38-X8AP3ZgktXOO0',
      accounts: ['0d0f5c7caf0a5f3fa9d7994f1e9f041b0b6a432c7deeac68e4d21a187a8c7c85'],
    },
  },
};
//https://eth-sepolia.g.alchemy.com/v2/U75YuhDgv5i72eNW38-X8AP3ZgktXOO0   