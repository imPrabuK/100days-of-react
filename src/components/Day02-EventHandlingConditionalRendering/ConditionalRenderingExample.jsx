import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";

function ConditionalRenderingExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="text-center">
      <h2>Conditional Rendering Example</h2>
      {isLoggedIn ? (
        <div>
          <Alert variant="success">Welcome back, User!</Alert>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <Alert variant="info">Please log in.</Alert>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
}

export default ConditionalRenderingExample;
