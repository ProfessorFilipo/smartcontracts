/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = 
{
   solidity: "0.8.20",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },

   etherscan:
   {
      apiKey: "VT6S7J9RFZ3XCSWWUDM4BYY2A1CURUAFXS"
   },

   sourcify:
   {
      enabled: false
   }
};