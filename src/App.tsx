import React, { useState } from "react";
import Button from "./components/atoms/Button";
import Header from "./components/atoms/Header";
import Logo from "./components/atoms/Logo";
import Text from "./components/atoms/Text";

function App() {

  return (
    <div className="font-sans py-10 box-border align-bottom grid gap-4 h-screen w-full items-center justify-center">
      <h1>Celebrity Web App</h1>
      <Header>Header</Header>
      <Text large bold>Large Bold Text</Text>
      <Text large >Large Text</Text>
      <Text>Regular Text</Text>
      <Text light>Light Text</Text>
      <Text light xSmall tone="100">Light Extra Small Text</Text>
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
