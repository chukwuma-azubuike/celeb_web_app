import React from "react";
import Logo from "../../atoms/Logo";
import AlignJustifyCenter from "../../containers/SectionContainer/alignJustifyCenter";
import menu from "../../../assets/svg/Menu.svg";
import ExpandableSearch from "../ExpandableSearch";

interface Props {}

export default function TopNavBar(props: Props) {
  return (
    <nav className="p-3 sticky top-0">
      <div className="grid gap-3 grid-cols-top-nav h-14 justify-between items-center box-border">
        <Logo />
        <AlignJustifyCenter>
          <ExpandableSearch />
          <img src={menu} className="ml-3" />
        </AlignJustifyCenter>
      </div>
    </nav>
  );
}
