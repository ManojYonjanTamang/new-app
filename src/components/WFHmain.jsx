import React from "react";
import WFHerror from "./WFHerror";
import WFHdata from "./WFHdata";

const infoStyled = {
  background: "#041C32",
  color: "azure",
  listStyle: "none",
};
const WFHgetdata = WFHdata.map((data, i) => (
  <div /*key={i}*/ key={data.id} style={infoStyled}>
    <li>
      {data.id}
      <br />
      {data.title}
      <br />
      {data.url}
      <br />
      {data.thumbnailUrl}
    </li>
    <hr />
  </div>
));

const display = "WFHgetdata";

const WFHmain = () => {
  return (
    <>{display === "WFHgetdata" ? <div>{WFHgetdata}</div> : <WFHerror />}</>
  );
};

export default WFHmain;
