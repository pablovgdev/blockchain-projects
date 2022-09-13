import "./App.css";
import { requestAccount } from "./services/util";


function App() {
  requestAccount();
  return <h1>Voting System</h1>;
}

export default App;
