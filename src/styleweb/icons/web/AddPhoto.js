import React from "react";

const AddPhoto = props => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-4-4h24v24H-4z" />
      <path
        d="M15.071 8H.93M8 .929V15.07"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </g>
  </svg>
);

export default AddPhoto;
