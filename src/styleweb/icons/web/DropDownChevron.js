import React from "react";

const DropDownChevron = props => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="#5E6E80"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M8 10l4 4 4-4"
      />
    </g>
  </svg>
);

export default DropDownChevron;
