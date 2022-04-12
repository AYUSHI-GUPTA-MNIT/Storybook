import React from "react";

const EmailWarn = props => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g strokeLinecap="round" strokeLinejoin="round">
        <g stroke="#1F2933" strokeWidth={1.4}>
          <path d="M4 8h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H4c-.825 0-1.5-.675-1.5-1.5v-9C2.5 8.675 3.175 8 4 8z" />
          <path d="M17.5 9.5L10 14.75 2.5 9.5" />
        </g>
        <path d="M21.5 10v.5m0-8.5v5" stroke="#D93016" strokeWidth={2} />
      </g>
    </g>
  </svg>
);

export default EmailWarn;
