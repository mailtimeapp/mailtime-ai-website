import Image from "next/image";
import { useState } from "react";
import IconExpandMore from "../Icon/ExpandMore";

const FaqAccordionItem = ({ children, icon, title, onClick, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div {...props}>
      <button
        onClick={() => setIsActive(!isActive)}
        className={`flex flex-row items-center space-x-[1.6rem] rounded-[2.4rem]  p-[1.6rem] text-[1.4rem] font-bold transition ${
          isActive ? "bg-[#334155] text-white" : "bg-[#F1F5F9] text-[#334155]"
        }`}
      >
        <span>
          <Image
            src={`/static/img/faq/faq_icon-${icon}${
              isActive ? "-inverted" : ""
            }.svg`}
            alt=""
            width={24}
            height={24}
          />
        </span>
        <span>{title}</span>
        <span>
          <IconExpandMore
            className={`transform transition ${
              isActive
                ? "-scale-y-100 fill-current text-white"
                : "scale-y-100 fill-current text-[#ADB3BB]"
            }`}
          />
        </span>
      </button>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default FaqAccordionItem;
