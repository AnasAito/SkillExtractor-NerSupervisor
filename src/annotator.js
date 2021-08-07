import React, { useState } from "react";
import { TokenAnnotator } from "react-text-annotate";

const TAG_COLORS = {
  HARD: "#00ffa2",
  SOFT: "#84d2ff",
  CERTIFICATE: "RED"
};
const Card = ({ children }) => (
  <div
    style={{
      boxShadow: "0 2px 4px rgba(0,0,0,.1)",
      margin: 6,
      maxWidth: 500,
      padding: 16
    }}
  >
    {children}
  </div>
);
export default function Index() {
  const TEXT =
    "   Experience with the front-end basics: HTML5, CSS3, and JS Experience using a version control systemFamiliarity with MV* frameworks, e.g. React, Ember, Angular, Vue";

  const [state, setState] = useState([
    {
      start: 5,
      end: 20,
      tag: "PERSON"
    },
    { start: 15, end: 20, tag: "PERSON" },
    { start: 71, end: 75, tag: "DATE" }
  ]);
  const [tag, setTag] = useState("PERSON");

  const handleChange = (value) => {
    setState(value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <div>
      <div>
        <Card>
          <h4>Default</h4>
          <select onChange={handleTagChange} value={tag}>
            <option value="HARD">HARD SKILL</option>
            <option value="SOFT">SOFT SKILL</option>
            <option value="CERTIFICATE">CERTIFICATE</option>
          </select>
          <TokenAnnotator
            style={{
              fontFamily: "IBM Plex Sans",
              maxWidth: 500,
              lineHeight: 1.5
            }}
            tokens={TEXT.split(" ")}
            value={state}
            onChange={handleChange}
            getSpan={(span) => ({
              ...span,
              tag: tag,
              color: TAG_COLORS[tag]
            })}
          />
        </Card>
      </div>

      <Card>
        <h4>Current Value</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Card>
    </div>
  );
}
