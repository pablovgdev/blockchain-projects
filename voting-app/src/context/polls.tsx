import { createContext, Dispatch, SetStateAction } from "react";
import { Poll } from "../types/types";

export interface PollsContext {
  polls: Poll[];
  setPolls: Dispatch<SetStateAction<Poll[]>>;
}

export const PollsContext = createContext({} as PollsContext);