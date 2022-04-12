import React from "react";

const Work = props => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <g
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        transform="translate(3 3)"
      >
        <rect width={15} height={10.5} y={3} rx={2} />
        <path d="M10.5 13.5v-12A1.5 1.5 0 0 0 9 0H6a1.5 1.5 0 0 0-1.5 1.5v12" />
      </g>
    </g>
  </svg>
);

export default Work;
