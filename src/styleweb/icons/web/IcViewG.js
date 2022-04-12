import React from "react";

const IcViewG = props => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(1 4)"
      >
        <path d="M0 8s4-8 11-8 11 8 11 8-4 8-11 8S0 8 0 8z" />
        <circle cx={11} cy={8} r={3} />
      </g>
    </g>
  </svg>
);

export default IcViewG;
