import React, { useState } from "react";

function ButtonWithEvent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center my-4">
      <p className="lead">
        You clicked <strong>{count}</strong> times
      </p>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default ButtonWithEvent;
