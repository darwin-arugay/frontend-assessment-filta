import { memo, PropsWithChildren } from "react";
import "./Panel.scss";
import caret from "../../assets/icons/caret.svg";

type AccordionPanelProps = {
  title: string;
  isActive: boolean;
  onShow: () => void;
} & PropsWithChildren;

const AccordionPanel = memo(
  ({ title, children, isActive, onShow }: AccordionPanelProps) => {
    const contentClasses = [
      "accordion__panel__content",
      isActive ? "accordion__panel__content_expanded" : "",
    ].join(" ");

    return (
      <section className="accordion__panel">
        <div className="flex justify-between items-center">
          <h3 className="accordion__panel__title" role="tab">
            {title}
          </h3>
          <button
            className="accordion__panel__icon"
            onClick={onShow}
            aria-expanded={isActive}
          >
            <img
              src={caret}
              alt="Caret icon"
              className={isActive ? "accordion__panel__icon_active" : ""}
              width={15}
              height={15}
            />
          </button>
        </div>
        <div role="panel" className={contentClasses}>
          {children}
        </div>
      </section>
    );
  }
);

AccordionPanel.displayName = "AccordionPanel";

export default AccordionPanel;
