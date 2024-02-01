import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/themecontext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
function App() {
  const [theme, setThememode] = useState("light");
  const lightToggle = () => {
    setThememode("light");
  };
  const darkToggle = () => {
    setThememode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, lightToggle, darkToggle }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {" "}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
