import "./index.css";

interface Props {
  className?: string;
  fullHeight?: boolean;
}

export default function Preloader({ className, fullHeight }: Props) {
  return (
    <div
      className={`bg-white dark:bg-primaryGrey-400 z-30
      ${fullHeight ? "h-screen" : " h-full"} w-full fixed ${className}
     `}
    >
      <div className="main mt-28 m-auto w-20">
        <div className="inside dark:bg-primaryGrey-400" />
      </div>
    </div>
  );
}
