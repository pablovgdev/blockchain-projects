import { ethers } from "hardhat";
import contract from "../artifacts/contracts/VotingSystem.sol/VotingSystem.json";

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

export async function getProvider() {
  await requestAccount();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const readContract = new ethers.Contract(contractAddress, contract.abi, provider);
  return { provider, readContract };
}

export async function getSigner() {
  await requestAccount();
  const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
  const writeContract = new ethers.Contract(contractAddress, contract.abi, signer);
  return { signer, writeContract };
}