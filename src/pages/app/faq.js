import FaqAccordion from "@/components/Faq/Accordion";
import FaqAccordionItem from "@/components/Faq/AccordionItem";

const Faq = () => {
  return (
    <div className="px-[1.6rem] py-[0.8rem]">
      <FaqAccordion>
        <FaqAccordionItem title="What is MailTime AI?" icon="mailtime_ai">
          Content
        </FaqAccordionItem>
        <FaqAccordionItem title="How does MailTime AI work?" icon="mailtime_ai">
          Content
        </FaqAccordionItem>
        <FaqAccordionItem
          title="What is MailTime AI Unlimited?"
          icon="mailtime_ai_unlimited"
        >
          Content
        </FaqAccordionItem>
        <FaqAccordionItem title="What is Measurable Data Token?" icon="mdt">
          Content
        </FaqAccordionItem>
        <FaqAccordionItem
          title="How to unsubscribe from MailTime AI Unlimited?"
          icon="mailtime_ai_unlimited"
        >
          Content
        </FaqAccordionItem>
        <FaqAccordionItem title="What is RewardMe?" icon="rewardme">
          Content
        </FaqAccordionItem>
      </FaqAccordion>
    </div>
  );
};

export default Faq;
