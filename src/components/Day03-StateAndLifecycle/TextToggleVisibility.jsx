import React, { useState, useEffect } from "react";

function TextToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log(`Component is ${isVisible ? "Visible" : "Hidden"}`);
    return () => console.log("Cleanup on component unmount");
  }, [isVisible]);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This text can be toggled</p>}
    </div>
  );
}

export default TextToggleVisibility;
