// hardhat.config.js
import "@nomiclabs/hardhat-ethers";
import "dotenv/config";
import "ethers";
const Sepolia_rpc_url = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const EHTERSCAN_API_KEY = process.env.EHTERSCAN_API_KEY;
export const defaultNetwork = "hardhat";
export const networks = {
  sepolia: {
    url: Sepolia_rpc_url,
    accounts: [PRIVATE_KEY],
    chainId: 11155111,
  },
  // rinkeby: {
  //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
  //   accounts: [`0x${process.env.PRIVATE_KEY}`],
  // },
  localhost: {
    url: "http://127.0.0.1:8545",
    // accounts: it selects by itself
    chainId: 31337,
  },
};
export const solidity = "0.8.0";
export const etherscan = {
  apiKey: EHTERSCAN_API_KEY,
};
