import { useState } from "react";
import IconHelp from "./Icons/Help";
import IconArrowDropDown from "./Icons/ArrowDropDown";

const CollapseCard = ({ title, children, className = "", ...props }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`flex flex-col w-full rounded-[0.4rem] overflow-hidden border border-ai-blue ${className}`}
      onClick={() => setIsActive(!isActive)}
      {...props}
    >
      <div
        className={`flex flex-row items-center justify-between p-6 transition-colors ${
          isActive ? "bg-ai-blue text-white" : "bg-white text-ai-blue"
        }`}
      >
        <div className="flex flex-row">
          <div className="w-[2.4rem] h-[2.4rem] mr-[0.8rem] relative">
            <IconHelp className={isActive ? "fill-white" : "fill-ai-blue"} />
          </div>
          <h2 className="text-sm font-bold">{title}</h2>
        </div>
        <div>
          <IconArrowDropDown
            className={`transition-transform transform ${
              isActive ? "fill-white rotate-180" : "fill-ai-blue"
            }`}
          />
        </div>
      </div>
      <div
        className={`transition-all grid ${
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="transition-all overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default CollapseCard;
