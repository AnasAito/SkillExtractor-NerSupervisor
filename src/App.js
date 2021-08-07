import { Fragment, useState } from "react";
import Annotator from "./annotator";
import Header from "./header";
import AnnotatorCrad from "./AnnotatorCard";
export default function App() {
  const [selected, setSelected] = useState("all");
  console.log(selected);
  return (
    <div className=" w-full  flex flex-col justify-center items-center  pt-10 px-4">
      <div className="w-full  ">
        <Header selected={selected} setSelected={setSelected} />
      </div>
      <div className="w-1/2  ">
        <AnnotatorCrad />
      </div>
    </div>
  );
}
