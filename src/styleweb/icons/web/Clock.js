import React from "react";

const Clock = props => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-2-2h24v24H-2z" />
      <g
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        transform="translate(1.667 1.667)"
      >
        <circle cx={8.333} cy={8.333} r={8.333} />
        <path d="M8.333 3.333v5L11.667 10" />
      </g>
    </g>
  </svg>
);

export default Clock;
