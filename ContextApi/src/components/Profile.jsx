import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { username } = useContext(UserContext);
  return <h1>Welcome {username}</h1>;
}

export default Profile;
