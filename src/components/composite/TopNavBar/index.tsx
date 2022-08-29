import React from "react";
import { Store } from "redux";
import Logo from "../../atoms/Logo";
import AlignJustifyCenter from "../../containers/SectionContainer/alignJustifyCenter";
import menu from "../../../assets/svg/Menu.svg";
import ExpandableSearch from "../ExpandableSearch";
import Button from "../../atoms/Button";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSideNav } from "../../../redux/ActionCreators/Home";

interface Props {
  toggleSideNav: typeof toggleSideNav;
}

function TopNavBar({ toggleSideNav }: Props) {
  return (
    <nav className="px-5 sticky top-0 bg-white z-10 shadow-md dark:bg-primaryGrey-400">
      <div className="grid gap-3 grid-cols-top-nav justify-between items-center box-border">
        <Logo />
        <AlignJustifyCenter>
          <ExpandableSearch />
          <img src={menu} className="ml-4 lg:hidden" onClick={() => toggleSideNav(true)} />
          <Button
            // onClick={() => <Navigate to="/login" />}
            className="hidden lg:block w-28 ml-8"
            secondary
          >
            Login
          </Button>
        </AlignJustifyCenter>
      </div>
    </nav>
  );
}

// const mapStateToProps = (state: Store) => ({});
export default connect(null, { toggleSideNav })(TopNavBar);
