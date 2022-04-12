import React from "react";

const TabFileSelected = props => (
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
        strokeWidth={1.4}
      >
        <path d="M14.125 4h-6.5C6.728 4 6 4.716 6 5.6v12.8c0 .884.728 1.6 1.625 1.6h9.75c.897 0 1.625-.716 1.625-1.6V8.8L14.125 4z" />
        <path d="M14.125 4v4.8H19m-3.25 4h-6.5m6.5 3.2h-6.5m1.625-6.4H9.25" />
      </g>
    </g>
  </svg>
);

export default TabFileSelected;
