import FaqAccordion from "@/components/Faq/Accordion";
import FaqAccordionItem from "@/components/Faq/AccordionItem";

const Faq = () => {
  return (
    <div>
      <FaqAccordion>
        <FaqAccordionItem title="What is MailTime AI?">
          <div>content</div>
        </FaqAccordionItem>
      </FaqAccordion>
    </div>
  );
};

export default Faq;
