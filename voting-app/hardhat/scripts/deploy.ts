import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("VotingSystem");
  const contract = await factory.deploy();
  await contract.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
