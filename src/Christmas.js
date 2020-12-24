import React, { useEffect, useRef, useState } from "react";

import { Lights } from "./Lights";
import { Snowflakes } from "./Snowflakes";

import snowfield from "./assets/snowfield.svg";
import moon from "./assets/moon.svg";
import sleigh from "./assets/christmas-sleigh.svg";
import merryChristmas from "./assets/christmas-card.png";

const Christmas = ({playing}) => {
  if(!playing) return null;
  return (
      <>
     
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
          <div className="christmas-card">
            <img src={merryChristmas} />
          </div>
          <div className="box-container">
            <div className="box-wrapper">
              <div className="cube-face cube-front"></div>
              <div className="cube-face cube-back"></div>
              <div className="cube-face cube-right"></div>
              <div className="cube-face cube-left"></div>
              <div className="cube-face cube-bottom"></div>
              <div className="lid-wrapper">
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
    </>
  );
};
export default Christmas;