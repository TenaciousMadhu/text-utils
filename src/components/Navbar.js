import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="\">
          Text Utils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="\">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <div className="darkModeColors">
              <button
                className="option1"
                onClick={() => props.toggleMode("option1")}
              ></button>
              <button
                className="option2"
                onClick={() => props.toggleMode("option2")}
              ></button>
              <button
                className="option3"
                onClick={() => props.toggleMode("option3")}
              ></button>
              <button
                className="option4"
                onClick={() => props.toggleMode("option4")}
              ></button>
              <button
                className="option5"
                onClick={() => props.toggleMode("option5")}
              ></button>
              <div style={{ fontWeight: "bold" }}>Color Modes</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
