import React from "react";

const TabMoreSelected = props => (
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
        fill="#1476CC"
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        transform="translate(11 4)"
      >
        <circle cx={1} cy={8} r={1.6} />
        <circle cx={1} cy={1} r={1.6} />
        <circle cx={1} cy={15} r={1.6} />
      </g>
    </g>
  </svg>
);

export default TabMoreSelected;
