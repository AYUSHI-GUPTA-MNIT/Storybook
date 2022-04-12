import React from "react";

const CalendarIcon = props => (
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
        transform="translate(5 4)"
      >
        <rect width={15} height={14.4} y={1.6} rx={1.635} />
        <path d="M10.833 0v3.2M4.167 0v3.2M0 6.4h15" />
      </g>
    </g>
  </svg>
);

export default CalendarIcon;
