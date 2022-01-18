import React from "react";
import Preloader from "../../atoms/Preloader";

interface Props {
  children: JSX.Element | JSX.Element[] | boolean;
  classNames?: string;
  authWidth?: boolean;
}

export default function Page({ children, classNames, authWidth }: Props) {
  React.useEffect(() => {
    window.onload = () => {
      setPreloader(false);
    };
  }, []);

  const [preloader, setPreloader] = React.useState<boolean>(true);

  return (
    <>
      <Preloader className={preloader ? "block" : "hidden"} />
      <div className={`p-4 m-auto ${classNames} ${authWidth && "max-w-md"}`}>{children}</div>
    </>
  );
}
