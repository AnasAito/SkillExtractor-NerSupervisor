import React, { useState } from "react";
import { TokenAnnotator } from "react-text-annotate";

const TAG_COLORS = {
  HARD: "bg-yellow-200",
  SOFT: "bg-green-200",
  CERTIFICATION: "bg-gray-200"
};
export default function AnnotatorCard({ children }) {
  const tags = [
    { id: "HARD", label: "HARD SKILL" },
    { id: "SOFT", label: "SOFT SKILL" },
    { id: "CERTIFICATION", label: "CERTIFICATION" }
  ];
  const TEXT =
    "   Experience with the front-end basics: HTML5, CSS3, and JS Experience using a version control system . Familiarity with MV* frameworks, e.g. React, Ember, Angular, Vue";

  const [state, setState] = useState([
    {
      start: 5,
      end: 6,
      tag: "HARD"
    }
  ]);
  const [tag, setTag] = useState("SOFT");

  const handleChange = (value) => {
    setState(value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  const delete_ = (start) => {
    const n_state = state.filter((val) => val.start !== start);
    setState(n_state);
  };
  const AnnotatedEntity = (props) => {
    console.log(props);
    const { content, color, onClick, start, tag } = props;
    return (
      <span
        onClick={() => delete_(start)}
        className={`${color} mx-2 px-2 py-1 rounded-sm`}
      >
        {content}{" "}
        <span className=" font-bold text-blue-400 text-base p-1"> {tag}</span>
      </span>
    );
  };
  return (
    <div className=" flex flex-col  m-10  shadow-md rounded-md">
      <div className="bg-indigo-600 px-4 py-6 flex flex-row  space-x-2 rounded-t-md ">
        {tags.map((tag_) => (
          <span
            className={` cursor-pointer inline-flex items-center px-2.5 py-0.5 rounded-md  text-lg font-mono font-black ${
              tag === tag_.id
                ? " bg-white text-indigo-800"
                : "border-white border-2 bg-indigo-600 text-white"
            }`}
            onClick={() => setTag(tag_.id)}
          >
            {tag_.label}
          </span>
        ))}
      </div>
      <div className="px-4 py-6 bg-white ">
        <TokenAnnotator
          className=" text-xl font-mono font-semibold leading-10 "
          tokens={TEXT.split(" ")}
          value={state}
          onChange={handleChange}
          renderMark={AnnotatedEntity}
          getSpan={(span) => ({
            ...span,
            tag: tag,
            color: TAG_COLORS[tag]
          })}
        />
      </div>
      {/*  <h4>Current Value</h4>
      <pre>{JSON.stringify(state, null, 2)}</pre>*/}
    </div>
  );
}
