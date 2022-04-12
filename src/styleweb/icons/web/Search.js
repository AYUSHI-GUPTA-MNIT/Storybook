import React from "react";

const Search = props => (
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(3 3)"
      >
        <circle cx={8} cy={8} r={8} />
        <path d="M18 18l-4.35-4.35" />
      </g>
    </g>
  </svg>
);

export default Search;
