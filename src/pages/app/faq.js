import Image from "next/image";
import FaqAccordion from "@/components/Faq/Accordion";
import FaqAccordionItem from "@/components/Faq/AccordionItem";

const FaqList = [
  {
    title: "What is MailTime AI?",
    icon: "mailtime_ai",
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
    content: (
      <>
        <p>
          <b>MailTime AI Unlimited</b> is a subscription plan that gives
          MailTime users unlimited access to MailTime&apos;s advanced AI
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
          continue to have unlimited access to MailTime&apos;s AI
          functionalities during this time.
        </p>
      </>
    ),
  },
  {
    title: "What is RewardMe?",
    icon: "rewardme",
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
    title: "What is Measurable Data Token?",
    icon: "mdt",
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
          Upon activation of MailTime AI, users will receive an initial
          allocation of <b>10 MDTs</b>. If a user exhausts their balance, they
          will receive <b>10 token per day</b> for further use.{" "}
          <b>The maximum token balance for the daily refresh is 10.</b> Such
          MDTs can not be withdrawn, redeemed, transferred, or used in any other
          use cases at any point. Any MDT balance in the user&apos;s MailTime
          accounts can be reclaimed by Measurable Foundation Limited and its
          affiliates, at its discretion.
        </p>
      </>
    ),
  },
  {
    title: "How to unsubscribe from MailTime AI Unlimited?",
    icon: "mailtime_ai_unlimited",
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
        <a
          href="#!"
          className="mx-auto mt-[2.1rem] block w-max rounded-lg bg-[#FFEDED] p-2 font-semibold text-[#FF5656] active:bg-[#ffdbdb]"
        >
          Unsubscribe MailTime AI Unlimited
        </a>
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="px-[1.6rem] pb-[2.4rem] pt-[0.8rem]">
      <div className="mx-auto max-w-[65ch]">
        <FaqAccordion>
          {FaqList.map((faq, id) => (
            <FaqAccordionItem title={faq.title} icon={faq.icon} key={id}>
              {faq.content}
            </FaqAccordionItem>
          ))}
        </FaqAccordion>
      </div>
    </div>
  );
};

export default Faq;
