import FaqAccordion from "@/components/Faq/Accordion";
import FaqAccordionItem from "@/components/Faq/AccordionItem";

const Faq = () => {
  return (
    <div>
      <FaqAccordion>
        <FaqAccordionItem title="What is MailTime AI?" icon="mailtime_ai">
          <div>content</div>
        </FaqAccordionItem>
        <FaqAccordionItem title="How does MailTime AI work?" icon="mailtime_ai">
          <div>content</div>
        </FaqAccordionItem>
        <FaqAccordionItem
          title="What is MailTime AI Unlimited?"
          icon="mailtime_ai_unlimited"
        >
          <div>content</div>
        </FaqAccordionItem>
        <FaqAccordionItem title="What is Measurable Data Token?" icon="mdt">
          <div>content</div>
        </FaqAccordionItem>
        <FaqAccordionItem
          title="How to unsubscribe from MailTime AI Unlimited?"
          icon="mailtime_ai_unlimited"
        >
          <div>content</div>
        </FaqAccordionItem>
        <FaqAccordionItem title="What is RewardMe?" icon="rewardme">
          <div>content</div>
        </FaqAccordionItem>
      </FaqAccordion>
    </div>
  );
};

export default Faq;
