import React, { useState } from "react";

const UnityGame = () => {
  const [key, setKey] = useState(0); // Key to force re-render iframe

  const restartGame = () => {
    setKey(prevKey => prevKey + 1); // Change key to reload iframe
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <button 
        onClick={restartGame} 
        style={{
          position: "absolute", 
          top: "10px", 
          left: "10px", 
          padding: "10px", 
          fontSize: "16px", 
          cursor: "pointer", 
          zIndex: 10
        }}
      >
        Restart Game
      </button>
      
      <iframe
        key={key} // Change key to reload iframe
        title="Unity WebGL Game"
        src={`${process.env.PUBLIC_URL}/unityBuild/index.html`}
        style={{
          width: "100%",    
          height: "100vh",  
          border: "none",   
          overflow: "hidden",
        }}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default UnityGame;
