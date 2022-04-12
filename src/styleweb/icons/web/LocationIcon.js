import React from "react";

const LocationIcon = props => (
  <svg
    viewBox="0 0 14 16"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-1 0h16v16H-1z" />
      <g
        stroke="#818E99"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 .667)"
      >
        <path d="M12 6c0 4.667-6 8.667-6 8.667s-6-4-6-8.667a6 6 0 0 1 12 0z" />
        <circle cx={6} cy={6} r={2} />
      </g>
    </g>
  </svg>
);

export default LocationIcon;
