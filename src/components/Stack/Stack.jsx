import React from "react";

import "./Stack.scss";
import StackIcons from "./StackIcons";

const Stack = ({ stack }) => {
  return (
    <div className="stack">
      <h2 className="stack__title">
        My
        <span className="stack__title--bolded"> Skills and more...</span>
      </h2>
      <div className="stack__icons">
        <StackIcons stack={stack} />
      </div>
    </div>
  );
};

export default Stack;
