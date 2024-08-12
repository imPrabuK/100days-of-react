import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PropsPropTypes } from "./components/PropsPropTypes ";
import ButtonWithEvent from "./components/ButtonWithEvent";
import InputWithEvent from "./components/InputWithEvent";

function App() {
  const [count, setCount] = useState(0);

  return (
    //Props
    // <>
    //   <PropsPropTypes name="Jack" age={29} isMarried={true} />
    //   <PropsPropTypes age={26} isMarried={false} />
    //   <PropsPropTypes name="Muthu" age={25} isMarried={false} />
    // </>

    //Event Handling

    // <div>
    //   <ButtonWithEvent />
    //   <InputWithEvent />
    // </div>

    //Conditional rendering

    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-5 text-primary">React with Vite and Bootstrap</h1>
      <ConditionalRenderingExample />
    </Container>
  );
}

export default App;
