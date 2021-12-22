import React, { useState } from "react";
import Button from "./components/atoms/Button";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="font-sans align-bottom flex">
      <h1>Celebrity Web App</h1>
      <Button width="w-52" loading={loading} onClick={() => setLoading(true)}>
        Primary
      </Button>
      <Button width="w-52" secondary>Secondary</Button>
      <Button width="w-52" secondary loading>Secondary</Button>
    </div>
  );
}

export default App;
