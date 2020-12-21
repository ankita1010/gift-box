import React, { useRef, useState } from "react";

import { Lights } from "./Lights";
import { Snowflakes } from "./Snowflakes";

import snowfield from "./assets/snowfield.svg";
import moon from "./assets/moon.svg";
import sleigh from "./assets/christmas-sleigh.svg";

import fullscreen from "./assets/fullscreen.svg";
import refresh from "./assets/refresh.svg";

import "./App.scss";

const App = () => {
  const appRef = useRef(null);
  const [isGiftUnwrapped, setIsGiftUnwrapped] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      appRef?.current.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const refreshScreen = () => {
    window.location.reload();
  }

  return (
    <div ref={appRef}>
      <button onClick={toggleFullScreen} className="fullscreen-button">
        <img src={fullscreen} />
      </button>
      <button onClick={refreshScreen} className="refresh-button">
        <img src={refresh} />
      </button>
      <div className="app-body">
        <div className="background">
          <Lights />
          <Snowflakes />
          <div className="snow-field">
            <img src={snowfield} />
          </div>
          <div className="moon">
            <img src={moon} />
          </div>
          <div className="sleigh">
            <img src={sleigh} />
          </div>
          <div className={`box-container ${isGiftUnwrapped ? 'unwrapped-box' : ''}`} onClick={() => {setIsGiftUnwrapped(!isGiftUnwrapped)}}>
            <div className="box-shadow" />
            <div className="box-wrapper">
              <div className="cube-face cube-front"></div>
              <div className="cube-face cube-back"></div>
              <div className="cube-face cube-right"></div>
              <div className="cube-face cube-left"></div>
              <div className="cube-face cube-bottom"></div>
              <div className={`lid-wrapper ${isGiftUnwrapped ? 'unwrapped-lid' : ''}`}>
                <div className="lid-face lid-front"></div>
                <div className="lid-face lid-back"></div>
                <div className="lid-face lid-right"></div>
                <div className="lid-face lid-left"></div>
                <div className="lid-face lid-top"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
