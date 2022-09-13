import { FC, useContext, useEffect } from "react";
import { PollsContext } from "../../context/polls";
import { getContract } from "../../services/contract";
import "./ListPolls.css";

const ListPolls: FC = () => {
  const { polls, setPolls } = useContext(PollsContext);

  useEffect(() => {
    setInitialPolls();
  });

  async function setInitialPolls() {
    const { contract } = await getContract();
    const initialPolls = await contract.getPolls();
    setPolls(initialPolls);
  }

  return (
    <div>
      {polls.map((poll) => (
        <div>
          <p>{poll.name}</p>
          <p>{poll.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListPolls;
