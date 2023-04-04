import React from "react";

export default function Body(props) {
  const [text, setText] = React.useState("");
  let characters = text.length;
  let words = text === "" ? 0 : text.split(" ").length;

  const [styles, setStyles] = React.useState({
    fontWeight: "normal",
    fontStyle: "",
    textDecoration: "",
  });
  const [boldText, setBoldText] = React.useState(false);
  const [italicText, setItalicText] = React.useState(false);
  const [underlineText, setUnderlineText] = React.useState(false);

  function handleChange(event) {
    setText(event.target.value);
  }

  function changeToUC() {
    let textContent = text.toUpperCase();
    setText(textContent);
  }

  function changeToLC() {
    let textContent = text.toLowerCase();
    setText(textContent);
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
  }

  function clearText() {
    setText("");
    setBoldText(false);
    setStyles({
      fontWeight: "normal",
      textDecoration: "",
    });
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
  }

  function copyText(e) {
    document.getElementById("textarea").focus();
    navigator.clipboard.writeText(text);
  }

  function removeExtraSpaces() {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  }

  return (
    <div className="container">
      <textarea
        style={
          (styles,
          {
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          })
        }
        className="form-control mt-5 mb-3"
        id="textarea"
        rows="8"
        placeholder="Enter Text Here"
        onChange={handleChange}
        value={text}
      ></textarea>
      <button type="button" className="btn btn-dark mx-1" onClick={changeToUC}>
        Upper Case
      </button>
      <button type="button" className="btn btn-dark mx-1" onClick={changeToLC}>
        Lower Case
      </button>
      <button type="button" className="btn btn-dark mx-1" onClick={changeToTC}>
        Title Case
      </button>
      <button type="button" className="btn btn-dark mx-1" onClick={toggleBold}>
        <b>B</b>
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={toggleItalic}
      >
        <i>I</i>
      </button>
      <button
        style={{ fontFamily: "cursive" }}
        type="button"
        className="btn btn-dark mx-1"
        onClick={toggleUnderline}
      >
        <u>U</u>
      </button>
      <button type="button" className="btn btn-dark mx-1" onClick={copyText}>
        Copy
      </button>
      <button type="button" className="btn btn-dark mx-1" onClick={clearText}>
        Clear Text
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={removeExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <h2 className={`mt-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        Text Summary: <span className="summary">{words} Words,</span>{" "}
        <span className="summary">{characters} Characters</span>
      </h2>
    </div>
  );
}
