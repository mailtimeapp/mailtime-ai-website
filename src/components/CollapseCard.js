import { useState } from "react";
import IconHelp from "./Icons/Help";
import IconArrowDropDown from "./Icons/ArrowDropDown";

const CollapseCard = ({ title, children, className = "", ...props }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-[0.4rem] border border-ai-blue bg-white ${className}`}
      onClick={() => setIsActive(!isActive)}
      {...props}
    >
      <div
        className={`flex flex-row items-center justify-between p-6 transition-colors ${
          isActive ? "bg-ai-blue text-white" : "bg-white text-ai-blue"
        }`}
      >
        <div className="flex flex-row items-center">
          <div className="relative mr-[0.8rem] h-[2.4rem] w-[2.4rem]">
            <IconHelp className={isActive ? "fill-white" : "fill-ai-blue"} />
          </div>
          <h2 className="text-sm font-bold">{title}</h2>
        </div>
        <div>
          <IconArrowDropDown
            className={`transform transition-transform ${
              isActive ? "rotate-180 fill-white" : "fill-ai-blue"
            }`}
          />
        </div>
      </div>
      <div
        className={`grid transition-all ${
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden transition-all">{children}</div>
      </div>
    </div>
  );
};

export default CollapseCard;
