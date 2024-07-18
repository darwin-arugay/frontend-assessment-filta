import { useEffect, useState } from "react";
import "./App.scss";

import rawData from "./data/index.json";

import { Data } from "./common/types";
import ExampleTab from "./components/ExampleTab";
import Accordion from "./components/Accordion";

const App = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setData(rawData);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="app">
      <div className="w-2/3">
        <ExampleTab data={data} />
        <Accordion data={data} initialValue={1} />
      </div>
    </div>
  );
};

export default App;
