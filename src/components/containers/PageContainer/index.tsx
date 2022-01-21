import React from "react";
import Preloader from "../../atoms/Preloader";

interface Props {
  children: JSX.Element | JSX.Element[] | boolean;
  classNames?: string;
  authWidth?: boolean;
  noPreloader?: boolean;
  pad?: boolean;
}

export default function Page({ children, classNames, authWidth, noPreloader, pad }: Props) {
  React.useEffect(() => {
    window.onload = () => {
      setPreloader(false);
    };
  }, []);

  const [preloader, setPreloader] = React.useState<boolean>(true);

  return (
    <>
      {!noPreloader && <Preloader className={preloader ? "block" : "hidden"} />}
      <div className={`${pad && "p-4"} m-auto ${classNames} ${authWidth && "max-w-md"}`}>
        {children}
      </div>
    </>
  );
}
