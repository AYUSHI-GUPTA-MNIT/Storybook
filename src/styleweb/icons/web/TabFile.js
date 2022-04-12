import React from "react";

const TabFile = props => (
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
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      >
        <path d="M12.75 4H7.5C6.672 4 6 4.716 6 5.6v12.8c0 .884.672 1.6 1.5 1.6h9c.828 0 1.5-.716 1.5-1.6V9.6L12.75 4z" />
        <path d="M12.75 4v5.6H18" />
      </g>
    </g>
  </svg>
);

export default TabFile;
