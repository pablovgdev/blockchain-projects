import { ethers } from "ethers";
import { FC, useContext, useState } from "react";
import { PollsContext } from "../../context/polls";
import { getContract } from "../../services/contract";
import "./AddPoll.css";

const AddPoll: FC = () => {
  const { polls, setPolls } = useContext(PollsContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function addPoll() {
    const { contract } = await getContract();
    const poll = { name, description, options: [] };
    try {
      await contract.addPoll(poll, { value: ethers.utils.parseEther("0.001") });
      setPolls([...polls, poll]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="addPoll">
      <div className="name">
        <label>Name: </label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="description">
        <label>Description: </label>
        <textarea
          rows={5}
          cols={30}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="button">
        <button className="savePoll" onClick={addPoll}>
          Save poll
        </button>
      </div>
    </div>
  );
};

export default AddPoll;
