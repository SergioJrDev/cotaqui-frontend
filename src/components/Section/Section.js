import React from "react";

const Section = props => {
  const { style = {} } = props;
  const SectionStyle = {
    padding: "40px 0",
    backgroundColor: "#fff",
    ...style
  };
  return <section style={SectionStyle}>{props.children}</section>;
};

export default Section;
