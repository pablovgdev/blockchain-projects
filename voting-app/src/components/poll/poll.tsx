import { FC } from "react";
import { Poll } from "../../types/types";

interface Props {
  poll: Poll;
}

const Poll: FC<Props> = ({ poll }) => {
  return <p>hola</p>;
};

export default Poll;
