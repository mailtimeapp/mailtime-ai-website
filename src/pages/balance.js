import Head from "next/head";
import Image from "next/image";
import CollapseCard from "@/components/CollapseCard";
import { useRouter } from "next/router";
import { LeapFrog } from "@uiball/loaders";
import CanvasBackground from "@/components/CanvasBackground";

const HowDoesMailtimeAiWorkDetails = () => {
  const content = [
    {
      title: "Press on the MailTime AI icon on the bottom of the chat box.",
      img: {
        src: "/static/img/how-does-mailtime-ai-work/step01.jpg",
        alt: "",
        width: 590,
        height: 208,
      },
    },
    {
      title:
        "Based on the last thread of the email, you can choose the tone and length of response. Then simply hit “Generate”.",
      img: {
        src: "/static/img/how-does-mailtime-ai-work/step02.jpg",
        alt: "",
        width: 590,
        height: 402,
      },
    },
    {
      title: "You can choose to further enhance your message!",
      img: {
        src: "/static/img/how-does-mailtime-ai-work/step03.jpg",
        alt: "",
        width: 590,
        height: 394,
      },
    },
  ];
  return (
    <div className="p-6">
      {content.map((step, index) => (
        <>
          <div className="mx-auto flex max-w-[37.5rem] flex-row items-start space-x-4 font-inter text-[1.4rem] leading-normal">
            <div className="rounded-full bg-ai-blue px-2 text-white">
              {index + 1}
            </div>
            <h4 className="text-ai-blue">{step.title}</h4>
          </div>
          <div className="relative mx-auto mb-10 mt-6 w-full max-w-[375px]">
            <Image
              src={step.img.src}
              alt={step.img.alt}
              width={step.img.width}
              height={step.img.height}
            />
          </div>
        </>
      ))}
    </div>
  );
};

const DisclaimerDetails = () => (
  <div className="p-6">
    <p className="font-inter text-[1.4rem] leading-normal text-ai-blue">
      The <b>Measurable Data Token (MDT)</b> provided during the priority access
      phase is designed to be restricted and managed in a centralized way.{" "}
      <b>It is intended solely for use within the MailTime AI system.</b> This
      provision does not constitute a financial investment, security, share,
      equity, or any form of financial or investment instrument.The tokens are
      explicitly for use within the confines of the <b>MailTime AI</b>{" "}
      functionalities, as a means to enhance the user experience and facilitate
      user participation within the MailTime AI system.
    </p>
    <br />
    <p className="font-inter text-[1.4rem] leading-normal text-ai-blue">
      <b>
        It can not be withdrawn, redeemed, transferred, or used in any other use
        cases of the MDT at any point during or after the priority access phase.
        Any MDT balance in the user’s MailTime accounts after the conclusion of
        the priority access phase will be reclaimed by Measurable Foundation
        Limited and its affiliates, at its discretion.
      </b>
    </p>
    <br />
    <p className="font-inter text-[1.4rem] leading-normal text-ai-blue">
      All users should conduct their own due diligence before signing up for
      MailTime AI whitelisting and subsequently accepting the provided MDT. By
      receiving the MDT, users agree to be bound by all the restrictions
      outlined above. Users are solely responsible for understanding and
      complying with all laws, rules, and regulations of their specific
      jurisdiction that may be applicable to them in connection with their
      acceptance and use of MDT.
    </p>
    <br />
    <p className="font-inter text-[1.4rem] leading-normal text-ai-blue">
      Please refer to MailTime terms of service and privacy policy for more
      details.
    </p>
  </div>
);

const BalancePage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Balance - MailTime AI</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      </Head>
      <div className="mx-auto min-h-screen w-full overflow-x-hidden bg-no-repeat">
        <div className="mx-auto max-w-[60rem] px-[2.4rem]">
          <div className="relative my-16 w-full">
            <Image
              src="/static/img/balance-hero-title.svg"
              alt="Measurable Data Token (MDT) Exclusive Use for MailTime AI"
              width={654}
              height={236}
              priority
              className="mx-auto"
            />
          </div>

          <p className="my-[2.4rem] font-inter text-[1.4rem] text-ai-blue">
            You can now experience the power of MailTime AI first hand!
            <br />
            <br />
            During early access, you will receive 10 free MDT tokens, which will
            be replenished daily to a maximum of 10.
          </p>

          <div className="flex w-full flex-col overflow-hidden rounded-[0.4rem] border border-ai-blue bg-white">
            <div className="flex flex-row items-center justify-between bg-ai-blue p-6 text-white">
              <div className="flex flex-row">
                <div className="relative mr-[0.8rem] h-[2.4rem] w-[2.4rem]">
                  <Image
                    src="/static/img/wallet.svg"
                    alt="The icon of wallet"
                    fill
                  />
                </div>
                <h2 className="text-sm font-bold">Balance</h2>
              </div>
              <div className="font-inter text-[1.4rem]">
                {router.query.email || (
                  <LeapFrog size={24} speed={2} color="#fff" />
                )}
              </div>
            </div>
            <div className="flex flex-row items-center p-6 font-inter">
              <div className="relative mr-[0.8rem] w-[3.6rem] shrink-0">
                <Image
                  src="/static/img/mdt-coin.png"
                  alt="The icon of wallet"
                  width={72}
                  height={76}
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-medium tracking-tight text-gray-700">
                  Measurable Data Tokens
                </h3>
                <h4 className="text-[1.2rem] text-gray-500">
                  Exclusive use for MailTime AI
                </h4>
              </div>
              <div className="text-[2.4rem] font-semibold text-ai-blue">
                {router.query.balance || (
                  <LeapFrog size={24} speed={2} color="#0000ff" />
                )}
              </div>
            </div>
          </div>

          <CollapseCard title="How does MailTime AI work?" className="my-6">
            <HowDoesMailtimeAiWorkDetails />
          </CollapseCard>
          <CollapseCard
            title="MailTime AI Exclusive MDT Disclaimer"
            className="my-6"
          >
            <DisclaimerDetails />
          </CollapseCard>
        </div>

        <p className="mb-10 mt-16 text-center font-inter text-[1.4rem] text-ai-blue">
          Wallet enhancements coming soon, stay tuned!
        </p>
        <p className="mb-32 mt-10 text-center font-inter text-[1.4rem] text-ai-blue">
          If you have any inquiries, please contact support@mailtime.com
        </p>

        <CanvasBackground />
      </div>
    </>
  );
};

export default BalancePage;
