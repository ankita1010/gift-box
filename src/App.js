import React from "react";

import {Lights} from "./Lights";
import {Snowflakes} from "./Snowflakes";

import snowfield from "./assets/snowfield.svg";
import tree from "./assets/christmas-tree.svg";
import moon from "./assets/moon.svg";
import sleigh from "./assets/christmas-sleigh.svg";

import "./App.scss";

const App = () => {
  return (
    <div className="app-body">
      <div className="background">
		<Lights />
		<Snowflakes />
		<div className="snow-field">
			<img src={snowfield} />
		</div>
        <div className="christmas-tree">
          <img src={tree} />
        </div>
		<div className="moon">
			<img src={moon} />
		</div>
		<div className="sleigh">
			<img src={sleigh} />
		</div>
        <div className="box-container">
          <div className="box-shadow" />
          <div className="box-wrapper">
            <div className="cube-face cube-front">Front</div>
            <div className="cube-face cube-back">Back</div>
            <div className="cube-face cube-right">Right</div>
            <div className="cube-face cube-left">Left</div>
            <div className="cube-face cube-bottom">Bottom</div>
            <div className="lid-wrapper">
              <div className="lid-face lid-front">Front</div>
              <div className="lid-face lid-back">Back</div>
              <div className="lid-face lid-right">Right</div>
              <div className="lid-face lid-left">Left</div>
              <div className="lid-face lid-top">Top</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
