import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337
    }
  }
};

export default config;
