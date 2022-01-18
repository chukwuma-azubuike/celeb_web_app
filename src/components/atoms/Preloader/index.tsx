import "./index.css";

interface Props {
  className?: string;
  fullHeight?: boolean;
}

export default function Preloader({ className, fullHeight }: Props) {
  return (
    <div
      className={`bg-white bg-opacity-90 z-30 flex justify-center items-center
      ${fullHeight ? "h-screen" : " h-full"} w-full fixed ${className}
     `}
    >
      <div className="main m-auto w-20">
        <div className="inside " />
      </div>
    </div>
  );
}
