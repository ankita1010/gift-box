import React, { useRef, useState } from "react";

import fullscreen from "./assets/fullscreen.svg";
import refresh from "./assets/refresh.svg";
import play from "./assets/play.svg";

import "./App.scss";
import Christmas from "./Christmas";

const App = () => {
  const appRef = useRef(null);
  const [playing, toggle] = useState(false);

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

  const startPlaying = () => {
    toggle(true);
  }

  return (
    <div ref={appRef} className="backdrop">
      <button onClick={toggleFullScreen} className="fullscreen-button">
        <img src={fullscreen} />
      </button>
      {playing && (
        <>
          <button onClick={refreshScreen} className="refresh-button">
            <img src={refresh} />
          </button>
          <Christmas />
        </>
      )}
      {!playing && (
        <>
          <button onClick={startPlaying} className="play-button">
            <img src={play} />
          </button>
          <div className="toast-message">
            If you are on a phone, use the fullscreen mode and rotate to a landscape view for the best experience
          </div>
        </>
      )}
    </div>
  );
};
export default App;