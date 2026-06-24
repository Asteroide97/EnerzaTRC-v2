import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQAccordionProps = {
  items: ReadonlyArray<{
    question: string;
    answer: string;
  }>;
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="grid gap-4">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
