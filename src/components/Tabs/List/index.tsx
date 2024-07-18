import { type PropsWithChildren } from "react";

const TabList = ({ children }: PropsWithChildren) => {
  return (
    <ul
      role="tab-list"
      aria-label="Tab list"
      className="flex w-full h-fit min-h-16 gap-5 rounded-md border shadow-md p-4 overflow-x-auto"
    >
      {children}
    </ul>
  );
};

export default TabList;
