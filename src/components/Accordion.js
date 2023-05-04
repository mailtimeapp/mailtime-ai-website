import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items, page }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <ul className="">
      {items.map((item, idx) => (
        <AccordionItem key={idx} data={item} page={page} />
      ))}
    </ul>
  );
}

export default Accordion;
