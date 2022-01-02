import React, { SyntheticEvent } from "react";
import BadgeAvatars from "./components/atoms/Avatar";
import Button from "./components/atoms/Button";
import Header from "./components/atoms/Header";
import Logo from "./components/atoms/Logo";
import Text from "./components/atoms/Text";
import tutu from "./assets/images/tutu06.jpg";
import ty from "./assets/images/ty.jpg";
import timi from "./assets/images/timi.jpg";
import TextInput from "./components/atoms/TextInput";
import DropDown from "./components/atoms/DropDown/index";
import { DarkModeSwitch, ToggleSwitch } from "./components/atoms/ToggleSwitch";
import { getToggleState } from "./utils/HandleInputs";
import Checkbox from "./components/atoms/CheckBox";
import LinearProgressBar from "./components/atoms/LinearProgress";
import RatingStar from "./components/atoms/Rating";
import Chip from "./components/atoms/Chip";
import CustomizedSlider from "./components/atoms/Slider";
import Stepper from "./components/composite/Stepper";

export default function TestApp() {
  // localStorage.setItem("theme", "dark");

  return (
    <div className="dark:bg-black dark:text-white font-sans py-10 box-border align-bottom grid gap-4 h-full w-full items-center justify-center">
      <h1>Celebrity Web App</h1>
      <div className="flex justify-between w-1/2">
        <BadgeAvatars alert imageURL={tutu} />
        <BadgeAvatars alert imageURL={ty} />
        <BadgeAvatars alert imageURL={timi} />
      </div>
      <Header>Header</Header>
      <Text large bold tone="200">
        Large Bold Text
      </Text>
      <Text large>Large Text</Text>
      <Text light xSmall tone="100">
        Light Extra Small Text
      </Text>
      <DropDown
        menuId="Founders"
        menuLabel="Founders"
        menuList={["Timi", "Ty", "Chuks", "Regz"]}
      />
      <TextInput
        id="jimoh"
        placeholder="Regular"
        onChange={() => console.log()}
      />
      <TextInput
        id="error"
        placeholder="Error"
        onChange={() => console.log("Input change")}
        helperText="Error message"
        error
      />
      <ToggleSwitch
        label="Primary Toggle"
        onChange={(e, c) => console.log(getToggleState(e, c))}
      />
      <DarkModeSwitch
        label="Dark Mode"
        onChange={(e, c) => console.log(getToggleState(e, c))}
      />
      <CustomizedSlider onChange={(event, value) => console.log(value)} />
      <Checkbox onChange={(e, c) => console.log(getToggleState(e, c))} />
      <LinearProgressBar progress={25} />
      <Stepper
        steps={[
          { label: "Build", info: "Contruction On the go" },
          { label: "Test", info: "Lab works" },
          { label: "Document", info: "The Boring part" },
          { label: "Deploy", info: "Off to the Rockets" },
        ]}
        finishInfo='And We Are Live!!!'
      />
      <RatingStar handleRating={(rating) => console.log(rating)} />
      {/* <Chips onClick={(e) => console.log("Event==>", e)} /> */}
      <div className="flex">
        <Chip
          label="Chuks"
          active
          id="chuks"
          onClick={(e) => {
            // console.log(e.target.id);
          }}
        />
        <Chip
          label="Timolor"
          active
          disabled
          id="timi"
          onClick={(e) => {
            // console.log(e.target.id);
          }}
        />
        <Chip
          label="Ty"
          id="ty"
          active={false}
          onClick={(e) => {
            // console.log(e.target.id);
          }}
        />
        <Chip
          label="Regz"
          id="regz"
          active={false}
          disabled
          onClick={(e) => {
            // console.log(e.target.id);
          }}
        />
      </div>
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
