import "./App.css";
import SwitchButton from "./Button";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-success" : "bg-danger"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies. Id porta nibh venenatis cras sed felis
        eget velit. A diam sollicitudin tempor id eu. Tincidunt arcu non sodales neque sodales ut etiam sit. Eu
        scelerisque felis imperdiet proin fermentum. Faucibus a pellentesque sit amet porttitor. Laoreet id donec
        ultrices tincidunt arcu non sodales neque. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
        cras. Sollicitudinravida quis blandit turpis cursus in. Nulla
        porttitor massa id neque aliquam. Metus aliquam eleifend mi in nulla posuere. Consequat id porta nibh venenatis
        cras sed. A lacus vestibulum sed arcu non. Lacus viverra vitae congue eu consequat ac felis donec et. Vitae et
        leo duis ut. Consequat interdum varius sit amet mattis vulputate enim nulla. Faucibus scelerisque eleifend donec
        pretium vulputate sapien nec.
      </p>
      <SwitchButton />
    </div>
  );
}

export default App;