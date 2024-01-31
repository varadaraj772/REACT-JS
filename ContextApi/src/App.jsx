import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContextProvider } from "./context/UserContext";

function App() {
  const [username, setUsername] = useState(null);
  return (
    <>
      <UserContextProvider value={{ username, setUsername }}>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
