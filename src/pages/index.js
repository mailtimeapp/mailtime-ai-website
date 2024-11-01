import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import JoinWhitelistButton from "../components/JoinWhitelistButton";
import styles from "../styles/Home.module.css";
import InAppSignupForm from "../components/InAppSignupForm";
import MailchimpSignupForm from "../components/MailchimpSignupForm";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CanvasBackground from "@/components/CanvasBackground";

const Home = () => {
  const [email, setEmail] = useState("");
  const [emailInQuery, setEmailInQuery] = useState(false);
  const [registeredInQuery, setRegisteredInQuery] = useState(false);
  // check if email param exists in query
  const router = useRouter();
  useEffect(() => {
    if (router.query.email) {
      setEmail(router.query.email.toString());
      setEmailInQuery(true);
      if (router.query.registered === "true") {
        setRegisteredInQuery(true);
      }
    } else {
      setEmail("");
      setEmailInQuery(false);
      setRegisteredInQuery(false);
    }
  }, [router.query]);

  const { width } = useWindowDimensions();
  const isDesktop = !!width && width > 1023;

  return (
    <>
      <Head>
        <title>MailTime AI - The Email Messenger</title>
        <meta
          name="keywords"
          content="MailTime,简信,MailTimeApp,MailTimeApp,Gmail,YahooMail,myMail,MailBox,MailTimeAI"
        />
        <meta
          name="description"
          content="Experience the disruptive email messaging experience powered by Generative AI, brought to you by Measurable Data Token (MDT)."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      </Head>
      <div className="mx-auto min-h-screen w-full overflow-x-hidden bg-no-repeat">
        <Navbar />
        <div className="mx-auto w-full pt-[10.7rem] lg:w-[70%] lg:pt-[12.2rem] 2xl:w-[100rem]">
          <section className="mb-[4.3rem] lg:mb-32">
            <div className="mx-auto w-10/12">
              <div className="relative h-auto w-full">
                <Image
                  src="/static/img/experience-mailtimeai-now.webp"
                  alt="Experience MailTime AI Now"
                  width={1352}
                  height={588}
                  className="mx-auto"
                  priority
                />
              </div>
              <Link href="#download-mailtime" passHref>
                <JoinWhitelistButton className="mx-auto mt-[11.3rem] block lg:ml-auto lg:mr-0 lg:mt-24"></JoinWhitelistButton>
              </Link>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row lg:items-center">
            <div
              className={`relative mx-auto w-8/12 lg:mx-[3.1rem] lg:w-6/12 ${styles.mockup}`}
            >
              <Image
                src="/static/img/mailtimeai-on-phone.webp"
                alt="A image shows MailTime AI in an email chat on a phone."
                className="mx-auto"
                width={776}
                height={1427}
              ></Image>
            </div>
            <div className="mx-auto mt-[1.2rem] flex w-10/12 flex-col items-center space-y-[0.9rem] lg:mt-0 lg:w-6/12">
              <div className="mx-auto flex">
                <Image
                  src="/static/img/mailtimeai-logo.svg"
                  width={298}
                  height={62}
                  alt="MailTime AI powered by Generative AI"
                ></Image>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <Image
                  src="/static/img/Icon01.svg"
                  width={isDesktop ? 130 : 108}
                  height={isDesktop ? 130 : 108}
                  alt="Icon of Email Drafting"
                ></Image>
                <h4 className="font-sans text-[1.8rem] font-bold leading-[2.3rem] text-ai-blue lg:font-inter lg:text-[2.4rem] lg:leading-[2.9rem]">
                  Instant AI-powered Email Drafting
                </h4>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <Image
                  src="/static/img/Icon02.svg"
                  width={isDesktop ? 130 : 108}
                  height={isDesktop ? 130 : 108}
                  alt="Icon of AI Assistant"
                ></Image>
                <h4 className="font-sans text-[1.8rem] font-bold leading-[2.3rem] text-ai-blue lg:font-inter lg:text-[2.4rem] lg:leading-[2.9rem]">
                  Email Protocol-based AI Assistant
                </h4>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <Image
                  src="/static/img/Icon03.svg"
                  width={isDesktop ? 130 : 108}
                  height={isDesktop ? 130 : 108}
                  alt="Icon of Personalized Tone and Language"
                ></Image>
                <h4 className="font-sans text-[1.8rem] font-bold leading-[2.3rem] text-ai-blue lg:font-inter lg:text-[2.4rem] lg:leading-[2.9rem]">
                  Personalized Tone and Language
                </h4>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <Image
                  src="/static/img/Icon04.svg"
                  width={isDesktop ? 130 : 108}
                  height={isDesktop ? 130 : 108}
                  alt="Icon of Unparalleled Speed and Efficiency"
                ></Image>
                <h4 className="font-sans text-[1.8rem] font-bold leading-[2.3rem] text-ai-blue lg:font-inter lg:text-[2.4rem] lg:leading-[2.9rem]">
                  Unparalleled Speed and Efficiency
                </h4>
              </div>
            </div>
          </section>
          <section className="mx-auto my-[3.6rem] w-full px-[3.1rem] lg:my-[4.8rem] lg:w-10/12 lg:px-0">
            <article className="text-justify font-inter text-ai-blue">
              <p className="my-[1.4rem] text-[1.4rem] font-medium leading-[1.8rem] lg:my-[1.8rem] lg:text-[2.1rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                Experience the disruptive email messaging experience powered by{" "}
                <b>Generative AI</b>, brought to you by{" "}
                <a
                  href="https://mdt.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline underline-offset-4"
                >
                  <b>
                    <span className="whitespace-nowrap">
                      <span className="relative inline-block h-[1.4rem] w-[1.4rem] align-sub lg:h-[2.1rem] lg:w-[2.1rem]">
                        <Image
                          src="/static/img/mdt-icon.svg"
                          alt="The icon of Measurable Data Token(MDT)"
                          fill
                        />
                      </span>{" "}
                      Measurable
                    </span>{" "}
                    Data Token (MDT)
                  </b>
                </a>
                .
              </p>

              <p className="my-[1.4rem] text-[1.4rem] font-medium leading-[1.8rem] lg:my-[1.8rem] lg:text-[2.1rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                Manage your emails like never before. By providing relevant and
                accurate suggestions, you can automatically draft email replies
                and get back to what&apos;s important with MailTime AI.
              </p>
            </article>
          </section>

          <section className="mx-auto my-48 w-full px-[3.5rem] lg:w-10/12 lg:px-0">
            <iframe
              src="https://www.youtube.com/embed/vFxTFPmOi1E?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-auto aspect-square w-full rounded-[24px] shadow-2xl lg:w-10/12"
            ></iframe>
          </section>

          <section
            className="mx-auto my-32 w-full px-[3.5rem] lg:w-10/12 lg:px-0"
            id="download-mailtime"
          >
            <h3 className="my-[3.2rem] text-center font-sans text-[3.6rem] font-bold leading-[4.5rem] text-ai-blue lg:my-[4.4rem]">
              Download MailTime <br /> Enjoy MailTime AI Today!
            </h3>
            <div className="flex flex-row justify-center space-x-6">
              <a
                href="https://itunes.apple.com/app/id914281815"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[200px]"
              >
                <Image
                  src="/static/img/app-store-badge.png"
                  alt="Download MailTime on the App Store"
                  width={405}
                  height={120}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mailtime.android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[200px]"
              >
                <Image
                  src="/static/img/google-play-badge.png"
                  alt="Get MailTime on Google Play"
                  width={405}
                  height={120}
                />
              </a>
            </div>
          </section>
        </div>
      </div>

      <CanvasBackground />
      <Footer />
    </>
  );
};

export default Home;
