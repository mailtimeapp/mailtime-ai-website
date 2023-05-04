import Image from "next/image";

const Navbar = () => (
  <nav>
    <div className="w-full lg:w-[70%] 2xl:w-[100rem] mx-auto px-[2.5rem] lg:px-0 pt-[2rem] pb-[1.3rem] lg:py-[3.6rem]">
      <div className="w-[17rem] h-[3rem] lg:w-[22.8rem] lg:h-[4rem]">
        <a
          href="https://mailtime.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/img/Logo_Blue.svg"
            alt="MailTime Logo"
            width={228}
            height={40}
            className="cursor-pointer"
            priority
          />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
