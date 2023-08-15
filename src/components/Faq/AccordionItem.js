import { useState } from "react";

const FaqAccordionItem = ({
  children,
  title,
  onClickHandler: onClick,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div {...props}>
      <button onClick={() => onClickHandler()} className="bg-[#F1F5F9]">
        {title}
      </button>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default FaqAccordionItem;
