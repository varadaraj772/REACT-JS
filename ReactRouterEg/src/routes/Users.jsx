import { useParams } from "react-router-dom";
export const Users = () => {
  let users = useParams();
  return <h2>HELLO USER {users}</h2>;
};
