import { ChatBox } from "./ChatBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqList = [
  {
    id: "1",
    question: "1. What is Mental Wealth Academy?",
    answer: (
      <>
        Mental Wealth Academy is a revolutionary blockchain-based library and
        marketplace for authors and readers. We provide a decentralized platform
        where knowledge meets innovation, allowing creators to share their work
        and readers to access a wealth of content. Our ecosystem is powered by
        DAO tokens, giving our community the power to shape the future of
        digital publishing.
      </>
    ),
  },
  {
    id: "2",
    question: "2. What Makes It Beneficial?",
    answer: (
      <>
        At Mental Wealth Academy, we believe in democratizing knowledge and
        empowering both authors and readers. Our platform offers a unique blend
        of traditional publishing values and cutting-edge blockchain technology,
        creating a space where ideas can flourish and mental wealth can grow.
      </>
    ),
  },
  {
    id: "3",
    question: "3. How Can I Be Apart Of This?",
    answer: (
      <>
        Join the Mental Wealth Academy discord. Everyone can earn and receive tokens
        to be official members of the community. Once you're in, we got you. Earn money by uploading works of authorship,
        vote on proposals sort of like 'community notes' and more.
      </>
    ),
  },
];
export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      <ChatBox />
      <div className="rounded-lg border bg-white border-solid border-black overflow-hidden">
        <Accordion type="single" collapsible>
          {faqList?.map((data, i) => (
            <AccordionItem key={data?.question + i} value={`faqaccordion-${i}`}>
              <AccordionTrigger className="border-black font-bold p-6">
                {data?.question}
              </AccordionTrigger>
              <AccordionContent className="bg-[#e6e6e6] p-6">
                {data?.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex justify-end flex-col items-end p-6 text-sm">
          <span>Whitepaper</span>
          <span>Discord</span>
          <span>Contract</span>
        </div>
      </div>
    </div>
  );
};
