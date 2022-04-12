import React from "react";

const Add = props => (
  <svg viewBox="0 0 14 14" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-5-5h24v24H-5z" />
      <path
        d="M7 1v12M1 7h12"
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </g>
  </svg>
);

export default Add;
