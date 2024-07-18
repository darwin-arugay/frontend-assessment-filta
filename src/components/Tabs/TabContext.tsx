import { createContext, PropsWithChildren, useContext, useState } from "react";

export type TabContextValueType = string | null | number;

type TabContextProps = {
  value: TabContextValueType;
  onChange: (tab: TabContextValueType) => void;
};

const Context = createContext<TabContextProps | undefined>(undefined);

export const TabContext = ({
  children,
  initialValue = null,
}: { initialValue?: TabContextValueType } & PropsWithChildren) => {
  const [value, setValue] = useState<TabContextValueType>(initialValue);

  const onChange = (tab: TabContextValueType) => {
    setValue(tab);
  };

  return (
    <Context.Provider value={{ value, onChange }}>
      <div className="w-full min-h-96 sm:flex sm:flex-col m-5 gap-5 hidden">
        {children}
      </div>
    </Context.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTabContext must be used within a TabContext");
  }
  return context;
};
