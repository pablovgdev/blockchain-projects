import { ethers } from "ethers";
import { VotingSystem__factory } from "../../hardhat/typechain-types";

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export async function requestAccount() {
  if (!window.ethereum) {
    alert("Connect wallet first!");
    return;
  }
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return accounts[0];
}

export async function getContract() {
  await requestAccount();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
  const contract = new VotingSystem__factory(signer).attach(contractAddress);
  return { provider, signer, contract };
}