import "./App.css";
import { useContext, React } from "react";
import { ThemeContext } from "./ThemeContext";

export default function SwitchButton(props) {
    const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;
const onClick = () => {
    if (darkMode)
      theme.dispatch({ type: "LIGHTMODE" });
    else
      theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} 
    </button>

  );
}
  
    