import React, { useEffect } from "react";

const UnityGame = () => {
  useEffect(() => {
    // Log when the UnityGame component is mounted
    console.log("Unity Game component mounted!");

    // Log the iframe source URL
    console.log("Unity WebGL Game source URL:", `${process.env.PUBLIC_URL}/unityBuild/index.html`);

    // You can also log any other information here
    console.log("Component is rendering...");
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        title="Unity WebGL Game"
        src={`${process.env.PUBLIC_URL}/unityBuild/index.html`} // Path to Unity WebGL index.html in public
        style={{
          width: "100%",    // Full width
          height: "100vh",  // Full viewport height
          border: "none",   // Remove border
          overflow: "hidden", // Prevent overflow
        }}
        allowFullScreen={true} // Allow fullscreen for Unity game
      ></iframe>
    </div>
  );
};

export default UnityGame;
