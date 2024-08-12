import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat", //默认网络hardhat,如果不配置默认也是它
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0x2fd14371afcd4700ef7addcd6f9e00bb92c9ea59075746d18f79196de7f69b2c"],
      chainId: 1337,
    },
  }
};

export default config;
