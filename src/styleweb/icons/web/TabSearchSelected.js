import React from "react";

const TabSearchSelected = props => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(5 5)"
      >
        <circle cx={6.222} cy={6.222} r={6.222} />
        <path d="M14 14l-3.383-3.383" />
      </g>
    </g>
  </svg>
);

export default TabSearchSelected;
