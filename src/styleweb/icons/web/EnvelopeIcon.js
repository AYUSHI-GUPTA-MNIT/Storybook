import React from "react";

const EnvelopeIcon = props => (
  <svg
    viewBox="0 0 16 12"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0-2h16v16H0z" />
      <g stroke="#818E99" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.667.667h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V2c0-.733.6-1.333 1.334-1.333z" />
        <path d="M14.667 2L8 6.667 1.333 2" />
      </g>
    </g>
  </svg>
);

export default EnvelopeIcon;
