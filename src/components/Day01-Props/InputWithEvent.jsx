import React, { useState } from "react";

function InputWithEvent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="text-center my-4">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ maxWidth: "300px", margin: "0 auto" }}
      />
      <p className="mt-2">
        You typed: <strong>{inputValue}</strong>
      </p>
    </div>
  );
}

export default InputWithEvent;
