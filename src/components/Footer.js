import Image from "next/image";
import Accordion from "./Accordion";

const Footer = () => {
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                         text-[1.6rem] font-normal leading-[2.2rem] cursor-pointer"
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
      className="flex justify-center bottom-0 flex-wrap 
                 w-full lg:h-[42.8rem] h-max z-10
                 bg-[url('/static/img/footer_bg.svg')] bg-top bg-no-repeat 
                 mr-0 ml-0 bg-cover -mt-[9.5rem]"
    >
      <div
        className=" 2xl:w-[120rem] lg:w-[80%] w-full 
                      grid lg:grid-cols-6 grid-cols-1 gap-4
                      mt-40 pt-20 px-[2rem]
                      align-top justify-between"
      >
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:h-[3.6rem] h-[2.5rem] w-full">
            <img
              src="/static/img/mailtime_logo_full.svg"
              alt="mailtime logo"
              className="h-[100%] w-[auto]"
            />
          </div>
          <div className="mt-8 w-full">
            <span
              className="font-inter font-[300] text-white 
                             lg:text-[1.8rem] text-[1.6rem] "
            >
              MailTime Inc.
            </span>
            <br />
            <div className="pt-5 flex align-center space-x-3">
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
                  className="font-inter text-footer-grey hover:text-white 
                              lg:text-[1.8rem] text-[1.6rem] font-normal cursor-pointer"
                >
                  support@mailtime.com
                </a>
              </div>
            </div>
            <div className="pt-5 w-full flex align-center space-x-3">
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
                  className="font-inter text-footer-grey 
                                  lg:text-[1.8rem] text-[1.6rem] font-normal"
                >
                  66 Shanghai St, Yau Ma Tei, Kowloon, Hong Kong
                </span>
              </div>
            </div>
            <div className="pt-5 flex align-center space-x-3">
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
                  className="font-inter text-footer-grey 
                                  lg:text-[1.8rem] text-[1.6rem] font-normal"
                >
                  @MailTimeApp
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:block hidden">
          <div className="h-[5rem]">
            <span className="font-inter text-white text-[1.8rem] font-bold">
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
                className="font-inter text-footer-grey hover:text-white 
                            text-[1.8rem] font-normal cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                               text-[1.8rem] font-normal cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                            text-[1.8rem] font-normal cursor-pointer"
              >
                Contact Us
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 lg:block hidden">
          <div className="h-[5rem]">
            <span className="font-inter text-white text-[1.8rem] font-bold">
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
                className="font-inter text-footer-grey hover:text-white 
                            text-[1.8rem] font-normal cursor-pointer"
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
              className="font-inter text-footer-grey hover:text-white 
                            text-[1.8rem] font-normal cursor-pointer"
            >
              Feedback
            </a>
          </div>
        </div>
        <div className="col-span-1 lg:block hidden">
          <div className="h-[5rem]">
            <span className="font-inter text-white text-[1.8rem] font-bold">
              Legal & privacy
            </span>
          </div>
          <div className="pt-5 w-full">
            <a
              href="https://mailtime.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="font-inter text-footer-grey hover:text-white 
                                text-[1.8rem] font-normal cursor-pointer"
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
                className="font-inter text-footer-grey hover:text-white 
                                text-[1.8rem] font-normal cursor-pointer"
              >
                Privacy Policy
              </span>
            </a>
          </div>
          <div className="pt-5 block">
            <a
              href="https://mailtime.com/do-not-sell-my-personal-information"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="font-inter text-footer-grey hover:text-white 
                                text-[1.8rem] font-normal leading-[2.2rem] cursor-pointer"
              >
                Do Not Sell My Personal Information (California Residents)
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 lg:hidden block mt-[3rem]">
          <Accordion items={accordionItems} page="footer"></Accordion>
        </div>
      </div>
      <div className="w-[100vw] bg-ai-blue flex justify-center">
        <div className="2xl:w-[120rem] lg:w-[80%] w-full py-[2rem] bg-ai-blue">
          <hr className="border-1 border-white border-solid" />
          <div className="mt-5 lg:text-left text-center px-[1rem]">
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
