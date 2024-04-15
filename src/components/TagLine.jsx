import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""} pointer-events-none`}>
      {brackets("left")}
      <div className="mx-3 text-n3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
