import { useState } from "react";
import "./App.css";
import { themeProvider } from "./themecontext";

function App() {
  const [thememode, setThememode] = useState("light");
  const lightToggle = () => {
    setThememode("light");
  };
  const darkToggle = () => {
    setThememode("dark");
  };
  return (
    <themeProvider value={{ theme, lightToggle, darkToggle }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*theme btn */}
          </div>

          <div className="w-full max-w-sm mx-auto"> {/*card */}</div>
        </div>
      </div>
    </themeProvider>
  );
}

export default App;
