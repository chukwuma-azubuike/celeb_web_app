import React, { useState } from "react";
import Button from "./components/atoms/Button";
import Logo from "./components/atoms/Logo";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="font-sans py-10 box-border align-bottom grid gap-4 h-screen w-full items-center justify-center">
      <h1>Celebrity Web App</h1>
      <Button width="w-72">Primary</Button>
      <Button width="w-72" disabled>
        Disabled Primary
      </Button>
      <Button width="w-72" loading>
        Loading Primary
      </Button>
      <Button width="w-72" secondary>
        Secondary
      </Button>
      <Button width="w-72" secondary disabled>
        Disabled Secondary
      </Button>
      <Button width="w-72" secondary loading>
        Secondary
      </Button>
      <Logo variant="logo_text_color" size="lg" />
      <Logo variant="logo_text_color" size="md" />
      <Logo variant="logo_text_color" size="sm" />
    </div>
  );
}

export default App;
