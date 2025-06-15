require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia.publicnode.com", // More reliable RPC endpoint
      accounts: [process.env.METAMASK_PRIVATE_API_KEY],
      timeout: 60000 // Increased timeout to 60 seconds
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Removed array brackets
    timeout: 60000 // Added timeout for Etherscan API requests
  },
  sourcify: {
    enabled: true // Enable Sourcify verification as suggested in the warning message
  }
};