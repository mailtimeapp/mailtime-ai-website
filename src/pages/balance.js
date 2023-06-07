import Head from "next/head";
import Image from "next/image";
import CanvasBackground from "@/components/CanvasBackground";

const BalancePage = () => {
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
      <div className="bg-no-repeat w-full mx-auto min-h-screen overflow-x-hidden">
        <div className="px-[2.4rem] mx-auto">
          <div className="my-16 w-full pt-[36.09%] relative">
            <Image
              src="/static/img/balance-hero-title.svg"
              alt="Measurable Data Token (MDT) Exclusive Use for MailTime AI"
              fill
              priority
            />
          </div>

          <p className="font-inter text-[1.4rem] text-ai-blue my-[2.4rem]">
            You can now experience the power of MailTime AI first hand!
            <br />
            <br />
            During early access, you will receive 10 free MDT tokens, which will
            be replenished daily to a maximum of 10.
          </p>

          <div className="flex flex-col w-full rounded-[0.4rem] overflow-hidden border border-ai-blue">
            <div className="flex flex-row items-center justify-between bg-ai-blue text-white p-6">
              <div className="flex flex-row">
                <div className="w-[2.4rem] h-[2.4rem] mr-[0.8rem] relative">
                  <Image
                    src="/static/img/wallet.svg"
                    alt="The icon of wallet"
                    fill
                  />
                </div>
                <h2 className="text-sm font-bold">Balance</h2>
              </div>
              <p className="font-inter text-[1.4rem]">abc@abc.com</p>
            </div>
            <div className="p-6 font-inter flex flex-row items-center">
              <div className="w-[3.6rem] h-[3.8rem] mr-[0.8rem] relative">
                <Image
                  src="/static/img/mdt-coin.svg"
                  alt="The icon of wallet"
                  fill
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-medium text-gray-700 tracking-tight">
                  Measurable Data Tokens
                </h3>
                <h4 className="text-[1.2rem] text-gray-500">
                  Exclusive use for MailTime AI
                </h4>
              </div>
              <div className="text-[2.4rem] text-ai-blue font-semibold">10</div>
            </div>
          </div>
        </div>

        {/* <CanvasBackground /> */}
      </div>
    </>
  );
};

export default BalancePage;
