import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, Setusername] = useState("");
  const [passowrd, Setpassword] = useState("");
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => Setusername(e.target.value)}
      />
      <input
        type="password"
        placeholder="passowrd"
        value={passowrd}
        onChange={(e) => Setpassword(e.target.value)}
      />
      <button
        onClick={() => {
          setUser(username, passowrd);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
