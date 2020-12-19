import React from 'react';

import './App.scss';

const App = () => {
	return (
		<div className="app-block">
			<div className="bg"></div>
			<div className="big-wrapper">
				<div className="cube-face cube-front">Front</div>
				<div className="cube-face cube-back">Back</div>
				<div className="cube-face cube-right">Right</div>
				<div className="cube-face cube-left">Left</div>
				<div className="cube-face cube-bottom">Bottom</div>
				<div className="lid-wrapper">
				<div className="lid-front">Front</div>
				<div className="lid-back">Back</div>
				<div className="lid-right">Right</div>
				<div className="lid-left">Left</div>
				<div className="lid-top">Top</div>
			</div>
			</div>
			
			
		</div>
	)
};
export default App;