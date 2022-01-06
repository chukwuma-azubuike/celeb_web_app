import { Search } from "@mui/icons-material";
import React from "react";
import Input from "../../atoms/Input";
import AlignJustifyCenter from "../../containers/SectionContainer/alignJustifyCenter";

export default function ExpandableSearch() {
  const [expand, setExpand] = React.useState<boolean>(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <AlignJustifyCenter>
      {/* <Search onClick={handleClick} /> */}
      <div className={`ml-3 self-center flex`}>
        <Input search />
      </div>
    </AlignJustifyCenter>
  );
}
