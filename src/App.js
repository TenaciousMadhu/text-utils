import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import AlertShow from "./components/AlertShow";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();
  const [text, setText] = React.useState("");
  const [boldText, setBoldText] = React.useState(false);
  const [italicText, setItalicText] = React.useState(false);
  const [underlineText, setUnderlineText] = React.useState(false);

  const [styles, setStyles] = React.useState({
    fontWeight: "normal",
    fontStyle: "",
    textDecoration: "",
    backgroundColor: "white",
    color: "black",
  });

  const [alertStyle, setAlertStyle] = React.useState({
    display: "none",
  });

  function showAlert(message) {
    setAlert(message);
    setAlertStyle({
      display: "inline",
      position: "absolute",
      top: "55px",
      left: "500px",
    });
    setTimeout(() => {
      setAlert(null);
      setAlertStyle({ display: "none" });
    }, 2000);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4E4F50";
      setStyles((prevStyles) => {
        return {
          ...prevStyles,
          backgroundColor: "grey",
          color: "white",
        };
      });
      showAlert("Dark mode applied successfully");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setStyles((prevStyles) => {
        return {
          ...prevStyles,
          backgroundColor: "white",
          color: "black",
        };
      });
      showAlert("Light mode applied successfully");
    }
  }

  function changeToUC() {
    let textContent = text.toUpperCase();
    setText(textContent);
    showAlert("Text is changed to upper case");
  }

  function changeToLC() {
    let textContent = text.toLowerCase();
    setText(textContent);
    showAlert("Text is changed to lower case");
  }

  function changeToTC() {
    let newText = text.split(" ");
    let lcArray = [];
    let tcArray = [];
    for (let i = 0; i < newText.length; i++) {
      lcArray[i] = newText[i].toLowerCase();
    }
    for (let i = 0; i < lcArray.length; i++) {
      let firstLetter = lcArray[i].charAt(0).toUpperCase();
      tcArray[i] = firstLetter + lcArray[i].substring(1);
    }
    let tcString = tcArray.join(" ");
    setText(tcString);
    showAlert("Text is changed to title case");
  }

  function toggleBold() {
    let isBold = !boldText;
    setBoldText(isBold);
    setStyles((prevStyles) => {
      return {
        ...prevStyles,
        fontWeight: isBold ? "bold" : "normal",
      };
    });
    showAlert("Text style is changed to bold");
  }

  function toggleItalic() {
    let isItalic = !italicText;
    setItalicText(isItalic);
    setStyles((prevStyles) => {
      return {
        ...prevStyles,
        fontStyle: isItalic ? "italic" : "normal",
      };
    });
    showAlert("Text style is changed to italic");
  }

  function toggleUnderline() {
    let isUnderline = !underlineText;
    setUnderlineText(isUnderline);
    setStyles((prevStyles) => {
      return {
        ...prevStyles,
        textDecoration: isUnderline ? "underline" : "",
      };
    });
    showAlert("Text is underlined");
  }

  function clearText() {
    setText("");
    setBoldText(false);
    setStyles({
      fontWeight: "normal",
      textDecoration: "",
    });
    showAlert("Text is cleared");
  }

  function removeExtraSpaces() {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    showAlert("Extra spaces removed");
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <AlertShow alert={alert} alertStyle={alertStyle} />
      <Body
        mode={mode}
        showAlert={showAlert}
        styles={styles}
        toggleBold={toggleBold}
        toggleItalic={toggleItalic}
        toggleUnderline={toggleUnderline}
        clearText={clearText}
        changeToTC={changeToTC}
        changeToLC={changeToLC}
        changeToUC={changeToUC}
        removeExtraSpaces={removeExtraSpaces}
        handleChange={handleChange}
        text={text}
      />
    </>
  );
}

export default App;
