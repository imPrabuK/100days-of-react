import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PropsPropTypes } from "./components/PropsPropTypes ";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PropsPropTypes name="Jack" age={29} isMarried={true} />
      <PropsPropTypes age={26} isMarried={false} />
      <PropsPropTypes name="Muthu" age={25} isMarried={false} />
    </>
  );
}

export default App;
