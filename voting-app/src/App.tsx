import { useState } from "react";
import "./App.css";
import AddPoll from "./components/AddPoll/AddPoll";
import ListPolls from "./components/ListPolls/ListPolls";
import { PollsContext } from "./context/polls";
import { Poll } from "./types/types";

function App() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const pollsContext: PollsContext = { polls, setPolls };

  return (
    <div className="App">
      <PollsContext.Provider value={pollsContext}>
        <h1>Voting App</h1>
        <AddPoll />
        <ListPolls />
      </PollsContext.Provider>
    </div>
  );
}

export default App;
