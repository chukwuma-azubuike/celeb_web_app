import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../redux";
import { toggleSideNav } from "../../../redux/ActionCreators/Home";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import SubHeader from "../../atoms/SubHeader";
import Section from "../../containers/SectionContainer";
import AlignJustifyCenter from "../../containers/SectionContainer/alignJustifyCenter";
import close from "../../../assets/svg/Close.svg";
import { DarkModeSwitch } from "../../atoms/ToggleSwitch";
import { setDarkMode } from "../../../redux/ActionCreators/Theme";
import { darkMode } from "../../../utils/Theme";

interface Props {
  isLoggedIn: boolean;
  sideNavOpen: boolean;
  toggleSideNav: typeof toggleSideNav;
  setDarkMode: typeof setDarkMode;
}

function SideNavBar(props: Props) {
  return (
    <nav
      className={`
      fixed top-0 z-50 h-screen w-full p-4 box-border transition-all bg-white lg:hidden dark:bg-primaryGrey-400
      ${props.sideNavOpen ? "right-0" : "right-[100%]"}
      `}
    >
      <Section classNames="py-4">
        <AlignJustifyCenter>
          <Logo />
          <AlignJustifyCenter>
            <DarkModeSwitch
              label=""
              onChange={(event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
                props.setDarkMode(checked);
                var mode = new darkMode();
                mode.setDarkMode();
              }}
            />
            <img
              alt="close-side-nav"
              src={close}
              onClick={() => {
                props.toggleSideNav(false);
              }}
            />
          </AlignJustifyCenter>
        </AlignJustifyCenter>
      </Section>
      <Section>
        <SubHeader bold>Categories</SubHeader>
      </Section>
      <Button>{props.isLoggedIn ? "Logout" : "Login"}</Button>
    </nav>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state?.useProfile?.isLoggedIn,
    sideNavOpen: state?.sideNavOpen,
    darkMode: state?.darkMode,
  };
};

export default connect(mapStateToProps, { toggleSideNav, setDarkMode })(SideNavBar);
