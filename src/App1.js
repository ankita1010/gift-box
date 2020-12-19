import React from 'react';
import './app1.scss';

const App1 = () => {
    return (
        <div className="app-block">
            <div className="rotate">
                <div className="cube-front">Front</div>
                <div className="cube-back">Back</div>
                <div className="cube-right">Right</div>
                <div className="cube-left">Left</div>
                <div className="cube-bottom">Bottom</div>
            </div>
        </div>
    );
}

export default App1;