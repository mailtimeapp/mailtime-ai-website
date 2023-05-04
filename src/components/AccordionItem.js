import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Accodion.module.css";

function AccordionItem({ data, page }) {
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [data]);

  const btnOnClick = () => {
    setIsOpen(!isOpen);
  };

  // FAQ Page
  if (page == "faq") {
    return (
      <li className="grid bg-transparent px-[2rem]">
        <div className={`my-[1rem] flex styles.textWrap`}>
          <div>
            <div
              className={`${styles.extend_btn}  ${
                isOpen ? "hidden" : "block"
              } `}
            >
              <span className={`${styles.horizontal_bar}`}></span>
              <span
                className={`${styles.vertical_bar} 
                                origin-center transition duration-500 ease-in-out
                                ${isOpen ? "rotate-270" : "rotate-0"}`}
              ></span>
            </div>
          </div>
          <div
            className={`${styles.from_them} 
                           lg:px-[2rem] lg:py-[1.5rem] lg:ml-[1rem]
                           px-[1rem] py-[1rem] ml-[1rem]
                           `}
          >
            <button onClick={btnOnClick}>
              <span
                className="font-inter w-full
                               lg:text-[2.1rem] lg:leading-[2.8rem]
                               text-[1.6rem] leading-[2.6rem]
                               flex align-start px-[1rem]
                               text-left"
              >
                {data.question}
              </span>
            </button>
          </div>
        </div>
        <div
          className="my-[1rem] flex w-full overflow-hidden justify-end
                        transition-height duration-500 ease-in-out"
          style={{ height }}
        >
          <div
            ref={contentRef}
            className={`${styles.from_me}
                          flex flex-wrap max-w-fit mr-[1rem]`}
          >
            <span
              className="font-inter text-white
                               lg:text-[2.1rem] lg:leading-[2.8rem] 
                               text-[1.6rem] leading-[2.6rem] 
                               px-[2rem] py-[1.5rem]
                              "
            >
              {data.answer}
            </span>
          </div>
          <div className="w-[4rem]">
            <svg
              version="1.1"
              id="mailtime-avatar"
              width="40px"
              height="40px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <circle fill="#5d9bec" cx="50" cy="50" r="50" />
              <path
                fill="#FFFFFF"
                d="M45.2,52.2c1.1,1.2,2.5,1.9,4.1,1.9c0,0,0,0,0,0c1.5,0,3-0.7,4.1-1.9l18.6-20.9c-0.5-0.2-1-0.3-1.6-0.3H27.9c-0.6,0-1.2,0.1-1.7,0.4L45.2,52.2z"
              />
              <path
                fill="#FFFFFF"
                d="M74.5,35.1c0-1-0.3-1.9-0.9-2.6l-14,15.8l14.5,14.1c0.2-0.5,0.4-1.1,0.4-1.7V35.1z"
              />
              <path
                fill="#FFFFFF"
                d="M69,64.7h1.3c0.9,0,1.7-0.3,2.4-0.8L58.2,49.8l-3.3,3.8c-1.5,1.7-3.5,2.6-5.6,2.6c0,0,0,0,0,0c-2.1,0-4.1-0.9-5.6-2.5l-3.5-3.9L25.5,64c0.7,0.5,1.5,0.8,2.4,0.8h21.9c0.1,0.1,0.2,0.2,0.3,0.2l22,11.5c0.2,0.1,0.5,0.2,0.7,0.2c0.4,0,0.8-0.2,1.1-0.5c0.5-0.5,0.6-1.2,0.3-1.8L69,64.7z"
              />
              <path
                fill="#FFFFFF"
                d="M24.7,32.6c-0.5,0.7-0.8,1.5-0.8,2.5v25.5c0,0.6,0.1,1.2,0.4,1.7l14.6-14.1L24.7,32.6z"
              />
            </svg>
          </div>
        </div>
      </li>
    );
  } else {
    // Footer
    return (
      <li className="grid bg-transparent">
        <div
          className="flex w-full justify-between align-middle"
          onClick={btnOnClick}
        >
          <div className={`w-max px-[.5rem] py-[.5rem]`}>
            <button>
              <span className="font-['Inter'] font-[300] text-white text-[1.6rem]">
                {data.question}
              </span>
            </button>
          </div>
          <div className="inline-block align-middle">
            <div
              className={`${styles.footer_extend_btn}  ${
                isOpen ? "hidden" : "inline-block"
              } align-middle `}
            >
              <span className={`${styles.footer_horizontal_bar}`}></span>
              <span
                className={`${styles.footer_vertical_bar} 
                                origin-center transition duration-500 ease-in-out
                                ${isOpen ? "rotate-270" : "rotate-0"}`}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="flex w-full overflow-hidden
                        transition-height duration-500 ease-in-out"
          style={{ height }}
        >
          <div
            ref={contentRef}
            className={`flex flex-wrap max-w-fit mr-[1rem]`}
          >
            <span className="font-['Inter'] font-[300] text-white text-[1.6rem]">
              {data.answer}
            </span>
          </div>
        </div>
      </li>
    );
  }
}

export default AccordionItem;
