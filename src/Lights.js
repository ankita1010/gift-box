import React from 'react';

export const Lights = () => {
  return (
    <ul className="lightrope">
      {[...Array(40)].map(
        (each, index) =>
          <li key={`light-${index}`}>
            <div className="glow"></div>
          </li>
      )}
    </ul>
  )
}