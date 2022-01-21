import React from "react";
import Logo from "../../atoms/Logo";
import AlignJustifyCenter from "../../containers/SectionContainer/alignJustifyCenter";
import menu from "../../../assets/svg/Menu.svg";
import ExpandableSearch from "../ExpandableSearch";

interface Props {}

export default function TopNavBar(props: Props) {
  return (
    <nav className="px-5 sticky top-0 bg-white z-10 shadow-md">
      <div className="grid gap-3 grid-cols-top-nav justify-between items-center box-border">
        <Logo />
        <AlignJustifyCenter>
          <ExpandableSearch />
          <img src={menu} className="ml-4" />
        </AlignJustifyCenter>
      </div>
    </nav>
  );
}
