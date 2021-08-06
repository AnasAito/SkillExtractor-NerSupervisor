import { Fragment, useState } from "react";
import Annotator from "./annotator";
import Header from "./header";
export default function App() {
  const [selected, setSelected] = useState("all");
  console.log(selected);
  return (
    <div>
      <Header selected={selected} setSelected={setSelected} />
      <Annotator />
    </div>
  );
}
