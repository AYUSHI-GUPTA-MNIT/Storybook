import React from "react";

const IcError = props => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <g transform="translate(2.5 2.5)">
        <circle cx={5.5} cy={5.5} r={5.5} fill="#D93016" />
        <path
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M7.15 3.85l-3.3 3.3m0-3.3l3.3 3.3"
        />
      </g>
    </g>
  </svg>
);

export default IcError;
