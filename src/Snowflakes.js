import React from "react";

export const Snowflakes = () => {
  return (
    <div className="snowflakes">
      {[...Array(100)].map((each, index) => <i key={`snowflake-${index}`} />)}
    </div>
  );
};
