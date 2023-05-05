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
          content="MailTime is the Email Messenger that makes email as quick and easy as texting. Download MailTime today to upgrade your email messaging experience."
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="apple-itunes-app"
          content="app-id=914281815, affiliate-data=myAffiliateData, app-argument=myURL"
        />
        <meta
          name="google-site-verification"
          content="mtGZdEB7Wyg8LZkfMicDYpDB0zfvXYLJENsXflLyvjw"
        />
      </Head>
      <div className="z-10">
        <div
          className={`${styles.page} "bg-no-repeat w-full mx-auto min-h-screen"`}
        >
          {!registeredInQuery && <Navbar />}
          <div
            className={`w-full lg:w-[70%] 2xl:w-[100rem] mx-auto ${
              registeredInQuery
                ? "py-[4rem]"
                : "pt-[10.7rem] lg:pt-[12.2rem] pb-[17.5rem] lg:pb-[23.4rem]"
            }`}
          >
            <section
              className={
                registeredInQuery ? "mb-[4rem]" : "mb-[4.3rem] lg:mb-32"
              }
            >
              <div className="mx-auto w-10/12">
                <div className="w-full aspect-[87/32] hidden lg:block relative">
                  <Image
                    src="/static/img/hero-title.svg"
                    alt="Early access starts... NOW. Priority Access to MailTime AI powered by ChatGPT"
                    fill
                    priority
                  />
                </div>
                <div className="w-full aspect-[306/199] block lg:hidden relative">
                  <Image
                    src="/static/img/hero-title-mobile.svg"
                    alt="Early access starts... NOW. Priority Access to MailTime AI powered by ChatGPT"
                    fill
                    priority
                  />
                </div>
                {!registeredInQuery && (
                  <Link href="#join-whitelist" passHref>
                    <JoinWhitelistButton className="ml-auto block mt-[11.3rem] lg:mt-24"></JoinWhitelistButton>
                  </Link>
                )}
              </div>
            </section>
            {!registeredInQuery && (
              <>
                <section className="flex flex-col lg:flex-row lg:items-center">
                  <div className="w-8/12 lg:w-6/12 aspect-[24/45] mx-auto lg:mx-[3.1rem] relative">
                    <Image
                      src="/static/img/mailtimeai-mockup.png"
                      fill
                      alt="A mockup image shows using MailTime AI in an email chat."
                    ></Image>
                  </div>
                  <div className="w-10/12 lg:w-6/12 flex flex-col items-center mt-[1.2rem] space-y-[0.9rem] lg:mt-0 mx-auto">
                    <div className="flex mx-auto">
                      <Image
                        src="/static/img/mailtimeai-logo.svg"
                        width={298}
                        height={62}
                        alt="MailTime AI powered by ChatGPT"
                      ></Image>
                    </div>
                    <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                      <Image
                        src="/static/img/Icon01.svg"
                        width={isDesktop ? 130 : 108}
                        height={isDesktop ? 130 : 108}
                        alt="Icon of Email Drafting"
                      ></Image>
                      <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
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
                      <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
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
                      <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
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
                      <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
                        Unparalleled Speed and Efficiency
                      </h4>
                    </div>
                  </div>
                </section>
                <section className="w-full lg:w-10/12 mx-auto my-[3.6rem] lg:my-[4.8rem] px-[3.1rem] lg:px-0">
                  <article className="font-inter text-ai-blue text-justify">
                    <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                      Experience the disruptive email messaging experience
                      powered by ChatGPT, brought to you by{" "}
                      <a
                        href="https://mdt.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        <span className="whitespace-nowrap">
                          <Image
                            src="/static/img/mdt-icon.svg"
                            alt="The icon of Measurable Data Token(MDT)"
                            width={isDesktop ? 21 : 14}
                            height={isDesktop ? 21 : 14}
                            className="inline align-sub"
                          />{" "}
                          Measurable
                        </span>{" "}
                        Data Token (MDT)
                      </a>
                      .
                    </p>

                    <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                      Manage your emails like never before. By providing
                      relevant and accurate suggestions, you can automatically
                      draft email replies and get back to what&apos;s important
                      with MailTime AI.
                    </p>
                    <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                      MailTime AI whitelist is free for a limited time, so
                      don&apos;t miss out on this opportunity to get early
                      access to our ChatGPT-powered email reply drafts (before
                      it&apos;s full!).
                    </p>
                    <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                      During priority access phase, each user will be airdropped
                      a limited number of MDT to experience MailTime AI.
                    </p>
                    <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                      Simply click the “Join Whitelist” button below to sign up.
                    </p>
                  </article>
                </section>
              </>
            )}

            {registeredInQuery && (
              <section className="w-full lg:w-10/12 mx-auto my-0 px-[3.1rem] lg:px-0">
                <article className="font-inter text-ai-blue text-justify">
                  <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                    Be among the first to experience the power of MailTime AI!
                    Sign up for our whitelist and get early access to our
                    ChatGPT-powered email reply drafts (before it’s full!). As a
                    valued MailTime user, you&apos;ll be able to reply smarter
                    and save time with our new AI feature.
                  </p>
                </article>
              </section>
            )}

            {emailInQuery && (
              <InAppSignupForm email={email} registered={registeredInQuery} />
            )}
            {!emailInQuery && <MailchimpSignupForm />}

            {!emailInQuery && (
              <section className="w-full lg:w-10/12 mx-auto px-[3.5rem] lg:px-0">
                <h3 className="font-sans font-bold text-[3.6rem] leading-[4.5rem] text-ai-blue my-[3.2rem] lg:my-[4.4rem]">
                  How to Whitelist
                </h3>
                <p className="font-inter font-medium text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] tracking-normal lg:tracking-[0.02em] text-ai-blue text-justify">
                  The MailTime AI whitelist is available exclusively for
                  MailTime users. As a MailTime user, you can sign up for the
                  whitelist to Simply open the app and click “Activate MailTime
                  AI” on the menu to get exclusive early access to this new
                  feature.
                </p>
                <p className="font-inter font-medium text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] tracking-normal lg:tracking-[0.02em] text-ai-blue text-center my-[4.4rem]">
                  We&apos;ll be in touch with more information soon, stay tuned!
                </p>
              </section>
            )}
            {emailInQuery && (
              <section className="w-full lg:w-10/12 mx-auto px-[3.5rem] lg:px-0">
                <p className="font-inter font-medium text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] tracking-normal lg:tracking-[0.02em] text-ai-blue text-center my-[2rem]">
                  We&apos;ll be in touch with more information soon, stay tuned!
                </p>
                <p className="font-inter font-medium text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] tracking-normal lg:tracking-[0.02em] text-ai-blue text-center my-[2rem]">
                  If you have any inquiries, please contact support@mailtime.com
                </p>
              </section>
            )}
          </div>
        </div>
        {!registeredInQuery && <Footer />}
      </div>

      <CanvasBackground />
    </>
  );
};

export default Home;
