import React from "react";

const IcBack = props => (
  <svg
    viewBox="0 0 6 10"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M15-7H-9v24h24z" />
      <path
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 9L1 5l4-4"
      />
    </g>
  </svg>
);

export default IcBack;
