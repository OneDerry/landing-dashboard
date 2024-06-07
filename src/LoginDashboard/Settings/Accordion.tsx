import { useState } from "react";

type AccordionProps = {
  title: string;
  answer: string;
  phone: number;
  birth: number;
};

export default function Accordion(props: AccordionProps) {
  const [accordionOpen, setaccordionOpen] = useState(false);
  return (
    <div className="h-[40px]">
      <button
        onClick={() => setaccordionOpen(!accordionOpen)}
        className="flex justify-between w-[70%]"
      >
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-900 ease-in-out" ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 bg-white "
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden p-3">Full name: {props.answer}</div>
        <div className="overflow-hidden p-3">Phone number: {props.phone}</div>
        <div className="overflow-hidden p-3">Birth day: {props.birth}</div>
      </div>
    </div>
  );
}
