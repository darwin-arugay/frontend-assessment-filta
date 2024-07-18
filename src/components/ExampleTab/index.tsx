// COMPONENTS
import Tabs from "../Tabs";

// TYPES
import type { Data } from "../../common/types";

type Props = {
  data: Data[];
};

const ExampleTab = ({ data }: Props) => {
  if (!data.length) return null;
  return (
    <Tabs.TabContext initialValue={1}>
      <Tabs.TabList>
        {data.map((item) => (
          <Tabs.Tab
            key={item.id}
            title={item.title}
            value={item.id}
            isDisabled={item.disabled}
          />
        ))}
      </Tabs.TabList>
      {data.map((item) => (
        <Tabs.TabPanel key={item.id} value={item.id}>
          <div
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          />
        </Tabs.TabPanel>
      ))}
    </Tabs.TabContext>
  );
};

export default ExampleTab;
