import { memo, type PropsWithChildren } from "react";
import { type TabContextValueType, useTabContext } from "../TabContext";

const TabPanel = memo(
  ({ children, value }: PropsWithChildren & { value: TabContextValueType }) => {
    const { value: selectedValue } = useTabContext();
    if (value !== selectedValue) return null;

    return (
      <div
        role="tab-panel"
        aria-label={`Tab panel ${value}`}
        className="w-full px-5"
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = "TabPanel";

export default TabPanel;
