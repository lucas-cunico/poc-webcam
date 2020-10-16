import React from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: "user"
};

function App() {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );
  return (
    <div className="App">
      <header className="App-header">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      </header>
    </div>
  );
}

export default App;
