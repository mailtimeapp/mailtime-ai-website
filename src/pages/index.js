import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import JoinWhitelistButton from "../components/JoinWhitelistButton";
import styles from "../styles/Home.module.css";
import InAppSignupForm from "../components/InAppSignupForm";
import MailchimpSignupForm from "../components/MailchimpSignupForm";
import Link from "next/link";

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

  return (
    <>
      <Head>
        <title>MailTime AI - The Email Messenger</title>
        <meta
          name="keywords"
          content="MailTime,简信,MailTimeApp,MailTimeApp,Gmail,YahooMail,myMail,MailBox"
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
      <div className={`${styles.page} "bg-no-repeat w-full mx-auto"`}>
        <nav>
          <div className="w-full lg:w-[70%] 2xl:w-[100rem] mx-auto px-[2.5rem] lg:px-0 pt-[2rem] pb-[1.3rem] lg:py-[3.6rem]">
            <div className="w-[17rem] h-[3rem] lg:w-[22.8rem] lg:h-[4rem]">
              <Link href="/" passHref>
                <Image
                  src="/static/img/Logo_Blue.svg"
                  alt="MailTime Logo"
                  width={228}
                  height={40}
                  layout="responsive"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </nav>
        <div className="w-full lg:w-[70%] 2xl:w-[100rem] mx-auto pt-[10.7rem] pb-[17.5rem] lg:pt-[12.2rem] lg:pb-[23.4rem]">
          <section className="mb-[4.3rem] lg:mb-32">
            <div className="mx-auto w-10/12">
              <div className="mb-24 hidden lg:block">
                <Image
                  src="/static/img/hero-title.svg"
                  alt="Early access starts... NOW. Priority Access to MailTime AI powered by ChatGPT"
                  width={870}
                  height={320}
                  layout="responsive"
                />
              </div>
              <div className="mb-[11.3rem] block lg:hidden">
                <Image
                  src="/static/img/hero-title-mobile.svg"
                  alt="Early access starts... NOW. Priority Access to MailTime AI powered by ChatGPT"
                  width={306}
                  height={199}
                  layout="responsive"
                />
              </div>
              <Link href="#join-whitelist" passHref>
                <JoinWhitelistButton className="ml-auto block"></JoinWhitelistButton>
              </Link>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row">
            <div className="w-5/10 block px-[3.1rem] text-center">
              <Image
                src="/static/img/mailtimeai-mockup.png"
                width={387}
                height={727}
                alt="A mockup image shows using MailTime AI in an email chat."
              ></Image>
            </div>
            <div className="w-5/10 flex flex-col items-center mt-[1.2rem] space-y-[0.9rem] lg:mt-0 px-16">
              <div className="flex mx-auto">
                <Image
                  src="/static/img/mailtimeai-logo.svg"
                  width={298}
                  height={62}
                  alt="MailTime AI powered by ChatGPT"
                ></Image>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <div className="w-2/5">
                  <Image
                    src="/static/img/Icon01.svg"
                    width={130}
                    height={130}
                    alt="Icon of Email Drafting"
                  ></Image>
                </div>
                <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
                  Instant AI-powered Email Drafting
                </h4>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <div className="w-2/5">
                  <Image
                    src="/static/img/Icon02.svg"
                    width={130}
                    height={130}
                    alt="Icon of AI Assistant"
                  ></Image>
                </div>
                <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
                  Email Protocol-based AI Assistant
                </h4>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <div className="w-2/5">
                  <Image
                    src="/static/img/Icon03.svg"
                    width={130}
                    height={130}
                    alt="Icon of Personalized Tone and Language"
                  ></Image>
                </div>
                <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
                  Personalized Tone and Language
                </h4>
              </div>
              <div className="flex flex-row items-center space-x-[2.1rem] md:space-x-[1.6rem]">
                <div className="w-2/5">
                  <Image
                    src="/static/img/Icon04.svg"
                    width={130}
                    height={130}
                    alt="Icon of Unparalleled Speed and Efficiency"
                  ></Image>
                </div>
                <h4 className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue">
                  Unparalleled Speed and Efficiency
                </h4>
              </div>
            </div>
          </section>
          <section className="my-[3.6rem] lg:my-[4.8rem] px-[3.1rem] lg:px-0">
            <article className="font-inter text-ai-blue text-justify">
              <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                Experience the disruptive email messaging experience powered by
                ChatGPT, brought to you by Measurable Data Token (MDT).
              </p>
              <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                Manage your emails like never before. By providing relevant and
                accurate suggestions, you can automatically draft email replies
                and get back to what&apos;s important with MailTime AI.
              </p>
              <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                MailTime AI whitelist is free for a limited time, so don&apos;t
                miss out on this opportunity to get early access to our
                ChatGPT-powered email reply drafts (before it&apos;s full!). 
              </p>
              <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                During priority access phase, each user will be airdropped a
                limited number of MDT to experience MailTime AI.
              </p>
              <p className="font-medium text-[1.4rem] lg:text-[2.1rem] my-[1.4rem] lg:my-[1.8rem] leading-[1.8rem] lg:leading-[2.8rem] lg:tracking-[0.02em]">
                Simply click the “Join Whitelist” button below to sign up.
              </p>
            </article>
          </section>
          {emailInQuery && (
            <InAppSignupForm email={email} registered={registeredInQuery} />
          )}
          {!emailInQuery && <MailchimpSignupForm />}

          <section className="px-[3.5rem] lg:px-0">
            <h3 className="font-sans font-bold text-[3.6rem] leading-[4.5rem] text-ai-blue my-[3.2rem] lg:my-[4.4rem]">
              How to Whitelist
            </h3>
            <p className="font-inter font-normal lg:font-medium text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] tracking-normal lg:tracking-[0.02em] text-ai-blue text-justify">
              The MailTime AI whitelist is available exclusively for MailTime
              users. As a MailTime user, you can sign up for the whitelist to
              Simply open the app and click “Activate MailTime AI” on the menu
              to get exclusive early access to this new feature. 
            </p>
            <p className="font-inter font-normal lg:font-medium text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] tracking-normal lg:tracking-[0.02em] text-ai-blue text-center my-[4.4rem]">
              We&apos;ll be in touch with more information soon, stay tuned!
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
