import React from "react";

const BackChevron = props => (
  <svg
    viewBox="0 0 14 14"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-5-5h24v24H-5z" />
      <path
        d="M13 7H1m6 6L1 7l6-6"
        stroke="#818E99"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </g>
  </svg>
);

export default BackChevron;
