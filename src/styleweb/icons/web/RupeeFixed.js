import React from "react";

const RupeeFixed = props => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <g stroke="#1A4266" strokeLinecap="round">
        <path
          strokeLinejoin="round"
          d="M3.5 2.5c4 .17 6 1.312 6 3.429 0 2.116-2 3.116-6 3l6 5.571"
        />
        <path d="M3.5 2.5h9m-9 3h9" />
      </g>
    </g>
  </svg>
);

export default RupeeFixed;
