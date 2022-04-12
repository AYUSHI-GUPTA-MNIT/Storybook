import React from "react";

const DownloadResume = props => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <g
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      >
        <path d="M16.3 11.63v3.111c0 .86-.7 1.556-1.56 1.556H5.26A1.56 1.56 0 0 1 3.7 14.74v-3.11" />
        <path d="M6.111 8.7L10 12.589 13.889 8.7M10 12.4V3.7" />
      </g>
    </g>
  </svg>
);

export default DownloadResume;
