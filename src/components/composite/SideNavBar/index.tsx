import { Search } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import { Store } from "redux";
import { RootState } from "../../../redux";
import { toggleSideNav } from "../../../redux/ActionCreators/Home";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import SubHeader from "../../atoms/SubHeader";
import Section from "../../containers/SectionContainer";
import AlignJustifyCenter from "../../containers/SectionContainer/alignJustifyCenter";
import close from "../../../assets/svg/Close.svg";

interface Props {
  isLoggedIn: boolean;
  sideNavOpen: boolean;
  toggleSideNav: typeof toggleSideNav;
}

function SideNavBar(props: Props) {
  return (
    <nav
      className={`
      fixed top-0 z-50 h-screen w-full p-4 box-border transition-all bg-white
      ${props.sideNavOpen ? "right-0" : "right-[100%]"}
      `}
    >
      <Section classNames="py-4">
        <AlignJustifyCenter>
          <Logo />
          <AlignJustifyCenter>
            <Search />
            <img
              alt="close-side-nav"
              src={close}
              onClick={() => props.toggleSideNav(false)}
              className="ml-8"
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
  };
};

export default connect(mapStateToProps, { toggleSideNav })(SideNavBar);
