import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUsername } = useContext(UserContext);
  return (
    <div>
      <h1>Login page</h1>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
}

export default Login;
