import { ethers } from "hardhat";
import { getProvider, getSigner } from "./util";

export interface Poll {
  name: string;
  description: string;
  options: string[];
}

async function getPolls() {
  try {
    const { readContract } = await getProvider();
    return await readContract.polls() as Poll[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function savePoll(poll: Poll) {
  try {
    const { writeContract } = await getSigner();
    await writeContract.savePoll(poll, { value: ethers.utils.parseEther("0.001") });
  } catch (error) {
    console.log(error);
  }
}

const VotingSystem = { getPolls, savePoll };

export default VotingSystem;