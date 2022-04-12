import React from "react";

const PhoneWarn = props => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="#1F2933"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M19.143 17.646v2.571a1.714 1.714 0 0 1-1.869 1.714A16.963 16.963 0 0 1 9.877 19.3a16.714 16.714 0 0 1-5.143-5.143 16.963 16.963 0 0 1-2.631-7.431 1.714 1.714 0 0 1 1.706-1.869H6.38a1.714 1.714 0 0 1 1.714 1.474c.109.823.31 1.631.6 2.409a1.714 1.714 0 0 1-.385 1.809L7.22 11.637a13.714 13.714 0 0 0 5.143 5.143l1.088-1.089a1.714 1.714 0 0 1 1.809-.385c.778.29 1.586.491 2.409.6.861.121 1.495.87 1.474 1.74z"
      />
      <path
        d="M17 3v5m0 3v.5"
        stroke="#D93016"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default PhoneWarn;
