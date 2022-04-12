import React from "react";

const LogoAnywhere = props => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#1476CC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.225}
      transform="translate(5 5)"
    >
      <circle cx={7} cy={7} r={7} />
      <path d="M0 7h14M7 0a10.71 10.71 0 0 1 2.8 7A10.71 10.71 0 0 1 7 14a10.71 10.71 0 0 1-2.8-7A10.71 10.71 0 0 1 7 0z" />
    </g>
  </svg>
);

export default LogoAnywhere;
