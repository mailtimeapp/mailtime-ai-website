import Image from "next/image";
import { useState } from "react";
import IconExpandMore from "../Icons/ExpandMore";

const FaqAccordionItem = ({ children, icon, title, onClick, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`box-border w-full overflow-hidden rounded-[2.6rem] border transition ${
        isActive ? "border-[#334155]" : "border-[#F1F5F9]"
      }`}
      {...props}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className={`flex w-full flex-row items-center space-x-[1.6rem] rounded-[2.4rem]  p-[1.6rem] text-[1.4rem] font-bold transition ${
          isActive ? "bg-[#334155] text-white" : "bg-[#F1F5F9] text-[#334155]"
        }`}
      >
        <span className="shrink-0">
          <Image
            src={`/static/img/faq/faq_icon-${icon}${
              isActive ? "-inverted" : ""
            }.svg`}
            alt=""
            width={24}
            height={24}
          />
        </span>
        <span className="w-full text-left">{title}</span>
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
      <div
        className={`transition-[grid-template-rows margin] grid overflow-hidden duration-200 ${
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr] "
        }`}
      >
        <div
          className={`overflow-hidden px-[1.6rem] text-[1.4rem] leading-normal text-[#334155] transition-[padding] ${
            isActive ? "py-[1.6rem]" : "py-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionItem;
