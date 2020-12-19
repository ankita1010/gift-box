import React from "react";

import tree from "./assets/christmas-tree.svg";

import "./App.scss";

const App = () => {
  return (
    <div className="app-body">
      <div className="background">
        <ul class="lightrope">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="wrapper">
          <div class="road">
            <div class="line"></div>
          </div>
        </div>
        <div className="christmas-tree-1">
          <img src={tree} />
        </div>
		<div className="christmas-tree-2">
          <img src={tree} />
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
