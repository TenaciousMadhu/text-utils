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
  const [textCase, setTextCase] = useState("");
  const [bodyButtonStyles, setBodyButtonStyles] = useState({
    backgroundColor: "#3a3c3d",
    color: "white",
  });
  const [summaryStyles, setSummaryStyles] = useState({ color: "#3a3c3d" });

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

  function toggleMode(option) {
    if (option === "option1") {
      document.body.style.backgroundColor = "#89375F";
      setBodyButtonStyles({ backgroundColor: "#d16f9f", color: "white" });
      setSummaryStyles({ color: "white" });
      setStyles((prevStyles) => {
        return {
          ...prevStyles,
          backgroundColor: "#d16f9f",
          color: "white",
        };
      });
    } else if (option === "option2") {
      document.body.style.backgroundColor = "#0B2447";
      setBodyButtonStyles({ backgroundColor: "#73a5eb", color: "white" });
      setSummaryStyles({ color: "white" });
      setStyles((prevStyles) => {
        return {
          ...prevStyles,
          backgroundColor: "#73a5eb",
          color: "white",
        };
      });
    } else if (option === "option3") {
      document.body.style.backgroundColor = "#edcdb7";
      setBodyButtonStyles({ backgroundColor: "#faebe1", color: "black" });
      setSummaryStyles({ color: "#3a3c3d" });
      setStyles((prevStyles) => {
        return {
          ...prevStyles,
          backgroundColor: "#faebe1",
          color: "black",
        };
      });
    } else if (option === "option4") {
      document.body.style.backgroundColor = "#aed9ea";
      setBodyButtonStyles({ backgroundColor: "#d5ecf5", color: "black" });
      setSummaryStyles({ color: "#3a3c3d" });
      setStyles((prevStyles) => {
        return {
          ...prevStyles,
          backgroundColor: "#d5ecf5",
          color: "black",
        };
      });
    } else if (option === "option5") {
      document.body.style.backgroundColor = "white";
      setBodyButtonStyles({ backgroundColor: "#3a3c3d", color: "white" });
      setStyles((prevStyles) => {
        return {
          ...prevStyles,
          backgroundColor: "white",
          color: "black",
        };
      });
    }
    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#4E4F50";
    //   setStyles((prevStyles) => {
    //     return {
    //       ...prevStyles,
    //       backgroundColor: "grey",
    //       color: "white",
    //     };
    //   });
    //   showAlert("Dark mode applied successfully");
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   setStyles((prevStyles) => {
    //     return {
    //       ...prevStyles,
    //       backgroundColor: "white",
    //       color: "black",
    //     };
    //   });
    //   showAlert("Light mode applied successfully");
    // }
  }

  function changeToUC() {
    let textContent = text.toUpperCase();
    setText(textContent);
    text
      ? showAlert("Text is changed to upper case")
      : showAlert("Enter some text");
    setTextCase("UC");
  }

  function changeToLC() {
    let textContent = text.toLowerCase();
    setText(textContent);
    text
      ? showAlert("Text is changed to lower case")
      : showAlert("Enter some text");
    setTextCase("LC");
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
    text
      ? showAlert("Text is changed to title case")
      : showAlert("Enter some text");
    setTextCase("TC");
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
    if (isBold) {
      showAlert("Text style is changed to bold");
    } else {
      showAlert("Bold text style is removed");
    }
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
    if (isItalic) {
      showAlert("Text style is changed to italic");
    } else {
      showAlert("Italic text style is removed");
    }
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
    if (isUnderline) {
      showAlert("Text is underlined");
    } else {
      showAlert("Underline is removed");
    }
  }

  function clearText() {
    setText("");
    setBoldText(false);
    setStyles({
      fontWeight: "normal",
      textDecoration: "",
    });
    text ? showAlert("Text is cleared") : showAlert("Enter some text");
    setTextCase("");
  }

  function removeExtraSpaces() {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    text ? showAlert("Extra spaces removed") : showAlert("Enter some text");
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
        textCase={textCase}
        bodyButtonStyles={bodyButtonStyles}
        summaryStyles={summaryStyles}
      />
    </>
  );
}

export default App;
