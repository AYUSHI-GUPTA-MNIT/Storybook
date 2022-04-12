import React from "react";

const PlusCircle = props => (
  <svg
    viewBox="0 0 14 14"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#1476CC"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(1 1)"
    >
      <circle cx={6} cy={6} r={6} />
      <path d="M6 3.6v4.8M3.6 6h4.8" />
    </g>
  </svg>
);

export default PlusCircle;
