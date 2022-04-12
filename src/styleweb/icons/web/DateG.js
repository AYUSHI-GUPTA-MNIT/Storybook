import React from "react";

const DateG = props => (
  <svg viewBox="0 0 14 15" width="1em" height="1em" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M-3-3h20v20H-3z" />
      <g
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        transform="translate(1 1)"
      >
        <rect width={12} height={11.7} y={1.3} rx={1.3} />
        <path d="M8.667 0v2.6M3.333 0v2.6M0 5.2h12" />
      </g>
    </g>
  </svg>
);

export default DateG;
