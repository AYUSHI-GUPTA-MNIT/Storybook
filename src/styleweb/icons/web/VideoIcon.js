import React from "react";

const VideoIcon = props => (
  <svg viewBox="0 0 15 10" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-3-5h20v20H-3z" />
      <g
        stroke="#117332"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        transform="translate(1 1)"
      >
        <path d="M13 1.143L8.864 4 13 6.857z" />
        <rect width={8.864} height={8} rx={1.143} />
      </g>
    </g>
  </svg>
);

export default VideoIcon;
