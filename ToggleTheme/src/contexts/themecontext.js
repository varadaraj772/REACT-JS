import { createContext, useContext } from "react";
export const themeContext = createContext({
  theme: "light",
  lightToggle: () => {},
  darkToggle: () => {},
});
export const ThemeProvider = themeContext.Provider;
export default function useTheme() {
  return useContext(themeContext);
}
