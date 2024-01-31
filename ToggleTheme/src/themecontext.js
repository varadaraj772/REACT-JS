import { createContext, useContext } from "react";
export const themeContext = createContext({
  theme: "light",
  lightToggle: () => {},
  darkToggle: () => {},
});
export const themeProvider = themeContext.Provider;
export default function useTheme() {
  return useContext(themeContext);
}
