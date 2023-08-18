import Image from "next/image";
import Accordion from "./Accordion";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width && width > 1023;

  const accordionItems = [
    {
      question: "About",
      answer: (
        <div className="ml-[2rem]">
          <div className="py-[.5rem]">
            <a
              href="https://mailtime.com/about#mission"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Mission
              </span>
            </a>
          </div>
          <div className="py-[.5rem]">
            <a
              href="https://mailtime.com/career"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Career
              </span>
            </a>
          </div>
          <div className="py-[.5rem]">
            <a
              href="https://mailtime.com/about#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Contact Us
              </span>
            </a>
          </div>
        </div>
      ),
    },
    {
      question: "Help Centre",
      answer: (
        <div className="ml-[2rem]">
          <div className="py-[.5rem]">
            <a
              href="https://mailtime.com/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                FAQ
              </span>
            </a>
          </div>
          <div className="py-[.5rem]">
            <a
              href="https://support.mailtime.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Feedback
              </span>
            </a>
          </div>
        </div>
      ),
    },
    {
      question: "Legal & privacy",
      answer: (
        <div className="ml-[2rem]">
          <div className="py-[.5rem]">
            <a
              href="https://mailtime.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Terms of Use
              </span>
            </a>
          </div>
          <div className="py-[.5rem]">
            <a
              href="https://mailtime.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Privacy Policy
              </span>
            </a>
          </div>
          <div className="py-[.5rem]">
            <a
              href="https://mailtime.com/do-not-sell-my-personal-information"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.6rem] 
                         font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Do Not Sell My Personal Information (California Residents)
              </span>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <footer
      className="bottom-0 z-10 ml-0 mr-0 
                 flex h-max w-full flex-wrap
                 justify-center bg-[url('/static/img/footer_bg.svg')] bg-cover 
                 bg-top bg-no-repeat lg:h-[42.8rem]"
    >
      <div
        className=" mt-40 grid w-full 
                      grid-cols-1 justify-between gap-4 px-[2rem]
                      pt-20 align-top lg:w-[80%]
                      lg:grid-cols-6 2xl:w-[120rem]"
      >
        <div className="col-span-1 lg:col-span-3">
          <div className="relative h-[2.5rem] w-full lg:h-[3.6rem]">
            <Image
              src="/static/img/mailtime_logo_full.svg"
              alt="The logo of MailTime"
              className="h-[100%] w-[auto]"
              width={isDesktop ? 205 : 142}
              height={isDesktop ? 36 : 25}
            />
          </div>
          <div className="mt-8 w-full">
            <span
              className="font-inter text-[1.6rem] font-[300] 
                             text-white lg:text-[1.8rem] "
            >
              MailTime Inc.
            </span>
            <br />
            <div className="align-center flex space-x-3 pt-5">
              <div className="w-[2.4rem]">
                <Image
                  src="/static/img/Mail.svg"
                  alt="support email"
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-fit">
                <a
                  href="mailto:support@mailtime.com"
                  className="cursor-pointer font-inter text-[1.6rem] 
                              font-normal text-footer-grey hover:text-white lg:text-[1.8rem]"
                >
                  support@mailtime.com
                </a>
              </div>
            </div>
            <div className="align-center flex w-full space-x-3 pt-5">
              <div className="w-[2.4rem]">
                <Image
                  src="/static/img/Map-pin.svg"
                  alt="address"
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-fit">
                <span
                  className="font-inter text-[1.6rem] 
                                  font-normal text-footer-grey lg:text-[1.8rem]"
                >
                  66 Shanghai St, Yau Ma Tei, Kowloon, Hong Kong
                </span>
              </div>
            </div>
            <div className="align-center flex space-x-3 pt-5">
              <div className="w-[2.4rem]">
                <Image
                  src="/static/img/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-fit">
                <span
                  className="font-inter text-[1.6rem] 
                                  font-normal text-footer-grey lg:text-[1.8rem]"
                >
                  @MailTimeApp
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="h-[5rem]">
            <span className="font-inter text-[1.8rem] font-bold text-white">
              About
            </span>
          </div>
          <div className="mt-5  w-full">
            <a
              href="https://mailtime.com/about#mission"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.8rem] 
                            font-normal text-footer-grey hover:text-white"
              >
                Mission
              </span>
            </a>
          </div>
          <div className="pt-5">
            <a
              href="https://mailtime.com/career"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.8rem] 
                               font-normal text-footer-grey hover:text-white"
              >
                Career
              </span>
            </a>
          </div>
          <div className="pt-5">
            <a
              href="https://mailtime.com/about#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.8rem] 
                            font-normal text-footer-grey hover:text-white"
              >
                Contact Us
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="h-[5rem]">
            <span className="font-inter text-[1.8rem] font-bold text-white">
              Help Centre
            </span>
          </div>
          <div className="mt-5 w-full">
            <a
              href="https://mailtime.com/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.8rem] 
                            font-normal text-footer-grey hover:text-white"
              >
                FAQ
              </span>
            </a>
          </div>
          <div className="pt-5">
            <a
              href="https://support.mailtime.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-inter text-[1.8rem] 
                            font-normal text-footer-grey hover:text-white"
            >
              Feedback
            </a>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="h-[5rem]">
            <span className="font-inter text-[1.8rem] font-bold text-white">
              Legal & privacy
            </span>
          </div>
          <div className="w-full pt-5">
            <a
              href="https://mailtime.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.8rem] 
                                font-normal text-footer-grey hover:text-white"
              >
                Terms of Use
              </span>
            </a>
          </div>
          <div className="pt-5">
            <a
              href="https://mailtime.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.8rem] 
                                font-normal text-footer-grey hover:text-white"
              >
                Privacy Policy
              </span>
            </a>
          </div>
          <div className="block pt-5">
            <a
              href="https://mailtime.com/do-not-sell-my-personal-information"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="cursor-pointer font-inter text-[1.8rem] 
                                font-normal leading-[2.2rem] text-footer-grey hover:text-white"
              >
                Do Not Sell My Personal Information (California Residents)
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 mt-[3rem] block lg:hidden">
          <Accordion items={accordionItems} page="footer"></Accordion>
        </div>
      </div>
      <div className="flex w-[100vw] justify-center bg-ai-blue">
        <div className="w-full bg-ai-blue py-[2rem] lg:w-[80%] 2xl:w-[120rem]">
          <hr className="border-1 border-solid border-white" />
          <div className="mt-5 px-[1rem] text-center lg:text-left">
            <span className="text-[1.2rem] text-[#D9DBE1]">
              All Rights Reserved © {new Date().getFullYear()} MailTime
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
