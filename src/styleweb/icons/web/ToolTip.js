import React from "react";

const ToolTip = props => (
  <svg viewBox="0 0 14 14" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-5-5h24v24H-5z" />
      <path
        fill="#818E99"
        fillRule="nonzero"
        d="M6 3.333h1.333v1.334H6V3.333zM6 6h1.333v4H6V6zm.667-6A6.67 6.67 0 0 0 0 6.667a6.67 6.67 0 0 0 6.667 6.666 6.67 6.67 0 0 0 6.666-6.666A6.67 6.67 0 0 0 6.667 0zm0 12a5.34 5.34 0 0 1-5.334-5.333 5.34 5.34 0 0 1 5.334-5.334A5.34 5.34 0 0 1 12 6.667 5.34 5.34 0 0 1 6.667 12z"
      />
    </g>
  </svg>
);

export default ToolTip;
