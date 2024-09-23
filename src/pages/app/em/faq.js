import Image from "next/image";
import FaqAccordion from "@/components/Faq/Accordion";
import FaqAccordionItem from "@/components/Faq/AccordionItem";
import { isAndroid, isIOS, MobileView, BrowserView } from "react-device-detect";
import NoSSR from "@/components/Helper/NoSSR";

const AndroidUnsubscribeUrl =
  "https://play.google.com/store/account/subscriptions?";
const IOSUnsubscribeUrl = "https://apps.apple.com/account/subscriptions";

const FaqList = [
  {
    title: "What is MailTime AI?",
    icon: "mailtime_ai",
    id: "what-is-mailtime-ai",
    content: (
      <p>
        Developed by{" "}
        <a
          href="https://mdt.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          <b>Measurable Data Tokens (MDT)</b>
        </a>
        , MailTime AI is powered by a cutting-edge Generative AI language model,
        providing unmatched speed and efficiency to email drafting. MailTime AI
        utilizes AI technology to suggest relevant and accurate email replies,
        making email management easier and faster.
      </p>
    ),
  },
  {
    title: "How does MailTime AI work?",
    icon: "mailtime_ai",
    id: "how-mailtime-ai-work",
    content: (
      <div className="grid gap-[2.4rem] pb-[0.8rem]">
        <div className="grid grid-cols-[2.4rem_auto] gap-[1.6rem]">
          <div className="grid h-[2.4rem] w-[2.4rem] place-content-center items-center rounded-xl bg-[#334155] text-white">
            1
          </div>
          <div>
            Press on the MailTime AI icon on the bottom of the chat box.
          </div>
          <div className="col-span-2 grid place-content-center">
            <Image
              src="/static/img/faq/mailtime-ai-step01.png"
              alt=""
              width={654}
              height={200}
            />
          </div>
        </div>
        <div className="grid grid-cols-[2.4rem_auto] gap-[1.6rem]">
          <div className="grid h-[2.4rem] w-[2.4rem] place-content-center items-center rounded-xl bg-[#334155] text-white">
            2
          </div>
          <div>
            Based on the last thread of the email, you can choose the tone and
            length of response. Then simply hit &ldquo;Generate&rdquo;.
          </div>
          <div className="col-span-2 grid place-content-center">
            <Image
              src="/static/img/faq/mailtime-ai-step02.png"
              alt=""
              width={654}
              height={328}
            />
          </div>
        </div>
        <div className="grid grid-cols-[2.4rem_auto] gap-[1.6rem]">
          <div className="grid h-[2.4rem] w-[2.4rem] place-content-center items-center rounded-xl bg-[#334155] text-white">
            3
          </div>
          <div>You can choose to further enhance your message!</div>
          <div className="col-span-2 grid place-content-center">
            <Image
              src="/static/img/faq/mailtime-ai-step03.png"
              alt=""
              width={654}
              height={408}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "What is MailTime AI Unlimited?",
    icon: "mailtime_ai_unlimited",
    id: "what-is-mailtime-ai-unlimited",
    content: (
      <>
        <p>
          <b>MailTime AI Unlimited</b> is a subscription plan that gives Email
          Messenger users unlimited access to Email Messenger&apos;s advanced AI
          functionalities.
        </p>
        <p className="mt-[2.1rem]">
          There are two options available for MailTime AI Unlimited: a monthly
          plan and a yearly plan. With the monthly plan, users can pay on a
          month-by-month basis, allowing them to easily manage their
          subscription and budget. The yearly plan, on the other hand, is
          charged on a yearly basis, providing users with a more cost-effective
          option for long-term use.
        </p>
        <p className="mt-[2.1rem]">
          Users can switch from monthly to yearly plan mid-way through their
          subscription without penalty. The yearly amount won&apos;t be billed
          until the end of the current monthly subscription, and users will
          continue to have unlimited access to Email Messenger&apos;s AI
          functionalities during this time.
        </p>
      </>
    ),
  },
  {
    title: "What is Measurable Data Token?",
    icon: "mdt",
    id: "what-is-mdt",
    content: (
      <>
        <p>
          The{" "}
          <a
            href="https://mdt.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            <b>Measurable Data Tokens (MDT)</b>
          </a>{" "}
          provided are explicitly for use within the confines of the MailTime AI
          functionalities, as a means to enhance the user experience and
          facilitate user participation within the MailTime AI system. It is
          designed to be restricted and managed in a centralized way, solely for
          use within the MailTime AI system. This provision does not constitute
          a financial investment, security, share, equity, or any form of
          financial or investment instrument.
        </p>
        <p className="mt-[2.1rem]">
          <b>
            Upon activation of MailTime AI, users will receive an initial
            allocation of 100 MDTs.
          </b>{" "}
          When users exhaust their balance, they can continue their use either
          through purchasing MailTime AI Credits, or become a tiered member of
          our RewardMe app (see FAQ “
          <a
            href="#rewardme-privileges"
            className="underline underline-offset-4"
          >
            What are the exclusive RewardMe privileges?
          </a>
          ” for more details).
        </p>
      </>
    ),
  },
  {
    title: "How to unsubscribe from MailTime AI Unlimited?",
    icon: "mailtime_ai_unlimited",
    id: "unsubscribe",
    content: (
      <>
        <p>
          To cancel your subscription and unsubscribe from our services, simply
          click on the <b>&ldquo;Unsubscribe&rdquo;</b> button below and follow
          the prompts. Once you have successfully unsubscribed, you will no
          longer receive any further communications and you will not be charged
          for future recurring subscriptions.
        </p>
        <p className="mt-[2.1rem]">
          It&apos;s important to note that if you do not cancel your
          subscription before the next payment date, you will be automatically
          enrolled as a recurring subscriber to MailTime AI Unlimited
          (Monthly/Yearly), depending on the plan you initially selected. In
          this case, the payment method you provided will be charged
          automatically for the subscription.
        </p>
        <p className="mt-[2.1rem]">
          We recommend that you review the subscription terms and cancel if
          needed, to avoid any unwanted charges.
        </p>
        <NoSSR>
          <MobileView>
            {(isAndroid || isIOS) && (
              <a
                href={isAndroid ? AndroidUnsubscribeUrl : IOSUnsubscribeUrl}
                className="mx-auto mt-[2.1rem] block w-max rounded-lg bg-[#FFEDED] p-2 font-semibold text-[#FF5656] active:bg-[#ffdbdb]"
              >
                Unsubscribe MailTime AI Unlimited
              </a>
            )}
          </MobileView>
          <BrowserView>
            {!isAndroid && !isIOS && (
              <div className="mx-auto mt-[2.1rem] block w-max rounded-lg bg-gray-200 p-2 font-semibold text-gray-500">
                Please open this page on an iOS or Android device
              </div>
            )}
          </BrowserView>
        </NoSSR>
      </>
    ),
  },
  {
    title: "What is RewardMe?",
    icon: "rewardme",
    id: "what-is-rewardme",
    content: (
      <>
        <p>
          <a
            href="https://reward.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            <b>RewardMe</b>
          </a>{" "}
          is an innovative reward app that automatically earns you rewards as
          you spend at your favourite merchants. Simply bind your email account
          and you will automatically get rewarded on eligible purchases in gift
          cards, or cryptocurrency. The best part about RewardMe is that you get
          to enjoy extra rewards on top of other reward programs you&apos;ve
          already signed up for!
        </p>
        <p className="mt-[2.1rem]">
          With RewardMe, Your Every Purchase Counts.
        </p>
      </>
    ),
  },
  {
    title: "What are the exclusive RewardMe privileges?",
    icon: "rewardme",
    id: "rewardme-privileges",
    content: (
      <>
        <p>
          Membership in{" "}
          <a
            href="https://reward.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            <b>RewardMe</b>
          </a>{" "}
          offers a range of exclusive benefits to MailTime AI, tailored to each
          tier level.
        </p>
        <p className="mt-[2.1rem]">
          Lower-tier members enjoy the privilege of receiving daily MDTs to
          power their usage of MailTime AI, as outlined in the table below.
          Meanwhile, higher-tier members gain the advantage of unlimited access*
          to MailTime AI, provided that they maintain their respective tier
          status.
        </p>
        <p className="mt-[2.1rem]">
          Progressing from the Newbie tier, individuals can advance to
          &ldquo;Starter&rdquo; and &ldquo;Extra&rdquo; tiers by actively
          engaging with the RewardMe app, which includes tasks such as daily
          check-ins and referring friends.
        </p>
        <p className="mt-[2.1rem]">
          To attain the prestigious Elite tier or beyond, members are required
          to undertake additional activities, such as staking a specified
          quantity of Measurable Data Tokens.
        </p>
        <Image
          src="/static/img/faq/rewardme-privilege-list.png"
          alt=""
          width={343 * 3}
          height={260 * 3}
          className="my-8"
        />
        <p className="mt-[2.1rem]">
          For more information, please download the RewardMe app, or visit the{" "}
          <a
            href="https://reward.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            <b>RewardMe website</b>
          </a>
          !
        </p>
      </>
    ),
  },
  {
    title: "How do I claim my RewardMe membership exclusive privileges?",
    icon: "rewardme",
    id: "claim-rewardme-privileges",
    content: (
      <>
        <p>
          To claim you RewardMe membership exclusive MailTime AI privileges is
          simple, just follow the steps below!
        </p>
        <ol className="ml-12 mt-[2.1rem] list-outside">
          <li className="my-3 list-decimal">
            Make sure you have joined RewardMe with the email address you intend
            with using in Email Messenger.
          </li>
          <li className="my-3 list-decimal">
            Add this email address to Email Messenger.
          </li>
          <li className="my-3 list-decimal">
            Click into the MailTime AI Wallet page.
          </li>
          <li className="my-3 list-decimal">
            Touch the “Measurable Data Tokens” card.
          </li>
          <Image
            src="/static/img/faq/click-mdt-card.png"
            alt=""
            width={1057}
            height={984}
            className="mx-auto my-8 -ml-6"
          />
          <li className="my-3 list-decimal">
            Click the “Claim Your Privilege” button on the bottom.
          </li>
          <Image
            src="/static/img/faq/claim-your-rewardme-privilege.png"
            alt=""
            width={343 * 3}
            height={324 * 3}
            className="mx-auto my-8 -ml-6"
          />
          <li className="my-3 list-decimal">
            Enjoy your exclusive privileges!
          </li>
        </ol>

        <p className="mt-[2.1rem]"></p>
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="px-[1.6rem] pb-[2.4rem] pt-[0.8rem]">
      <div className="mx-auto max-w-[60rem]">
        <FaqAccordion>
          {FaqList.map((faq, index) => (
            <FaqAccordionItem
              title={faq.title}
              icon={faq.icon}
              id={faq.id}
              key={index}
            >
              {faq.content}
            </FaqAccordionItem>
          ))}
        </FaqAccordion>
      </div>
    </div>
  );
};

export default Faq;
