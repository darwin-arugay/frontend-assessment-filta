import { TabContextValueType, useTabContext } from "../TabContext";
import "./Tab.scss";

export interface TabProps {
  title: string;
  value: TabContextValueType;
  isDisabled?: boolean;
}

const Tab = ({ title, value, isDisabled = false }: TabProps) => {
  const { value: selectedValue, onChange } = useTabContext();

  const handleClick = () => {
    if (!isDisabled) {
      onChange(value);
    }
  };

  const isActive = selectedValue === value;

  const buttonClasses = [
    "tab__button",
    isActive ? "tab__button_active" : "",
    isDisabled ? "tab__button_disabled" : "",
  ].join(" ");

  return (
    <li className="tab" role="tab" aria-label={`Tab ${title}`}>
      <a
        role="button"
        aria-label={`Tab button ${title}`}
        onClick={handleClick}
        className={buttonClasses}
      >
        {title}
      </a>
    </li>
  );
};

export default Tab;
