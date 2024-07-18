import React, { memo, useState } from "react";
import AccordionPanel from "./Panel";
import { Data } from "../../common/types";

export type AccordionAcceptedValue = string | null | number;

export type AccordionProps = {
  data: Data[];
  initialValue: AccordionAcceptedValue;
};

const Accordion = memo(({ data, initialValue }: AccordionProps) => {
  const [activePanel, setActivePanel] = useState(initialValue);

  if (!data.length) return null;

  const handleChange = (value: AccordionAcceptedValue) => {
    setActivePanel(value);
  };

  return (
    <section className="accordion my-5 sm:hidden" role="tablist">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <AccordionPanel
            title={item.title}
            isActive={activePanel === item.id}
            onShow={() => {
              if (item.id === activePanel) {
                setActivePanel(null);
              } else {
                handleChange(item.id);
              }
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: item.content,
              }}
            />
          </AccordionPanel>
          <hr className="my-2" />
        </React.Fragment>
      ))}
    </section>
  );
});

Accordion.displayName = "Accordion";

export default Accordion;
