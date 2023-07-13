import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is a dismissable alert
        </Alert>
      )}
      <Button
        btnType="button"
        color="btn-primary"
        context=""
        onClick={() => setAlertVisibility(true)}
      >
        This is a Primary button
      </Button>
    </div>
  );
}

export default App;
