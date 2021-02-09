import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: 0,
    top: 0,
//     position: "absolute",
  });

  const handler = (e) => {
    switch (e.keyCode) {
      case 39:
        setBallPosition({
          left: ballPosition.left + 5,
          top: ballPosition.top,
          position: "absolute",
        });
        break;
      case 40:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top + 5,
          position: "absolute",
        });
        break;
      case 37:
        setBallPosition({
          left: ballPosition.left - 5,
          top: ballPosition.top,
          position: "absolute",
        });
        break;
      case 38:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top - 5,
          position: "absolute",
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [ballPosition]);

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

const reset = () => {
  setBallPosition({
    left: 0,
    top: 0,
//     position: "absolute",
  });
};

const renderChoice = () => {
  if (renderBall) {
    return (
      <div className="ball"
        style={ballPosition}>
      </div>
    );
  } 
  else {
    return <button onClick={buttonClickHandler} className="start"> Start </button>;
  }
};

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
