import React from "react";

const ChevronDown = props => (
  <svg viewBox="0 0 10 6" width="1em" height="1em" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M-7-10h24v24H-7z" />
      <path
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 1l4 4 4-4"
      />
    </g>
  </svg>
);

export default ChevronDown;
