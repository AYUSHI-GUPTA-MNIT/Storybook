import React from "react";

const Filter = props => (
  <svg viewBox="0 0 19 20" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-2-2h24v24H-2z" />
      <path
        d="M3.25 5.5c1.131 0 2.067-.84 2.224-1.929h12.562a.321.321 0 1 0 0-.642H5.474A2.252 2.252 0 0 0 3.25 1C2.01 1 1 2.01 1 3.25S2.01 5.5 3.25 5.5zm0-3.857c.886 0 1.607.72 1.607 1.607 0 .886-.72 1.607-1.607 1.607A1.609 1.609 0 0 1 1.643 3.25c0-.886.72-1.607 1.607-1.607zM16.107 14.5c-1.131 0-2.067.84-2.224 1.929H1.32a.321.321 0 1 0 0 .642h12.562A2.252 2.252 0 0 0 16.107 19c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25zm0 3.857A1.609 1.609 0 0 1 14.5 16.75c0-.886.721-1.607 1.607-1.607s1.607.72 1.607 1.607c0 .886-.72 1.607-1.607 1.607zm1.929-8.678h-5.99a2.32 2.32 0 0 0-2.3-2.062 2.32 2.32 0 0 0-2.303 2.062H1.321a.321.321 0 1 0 0 .642h6.143a2.319 2.319 0 0 0 2.281 1.929 2.318 2.318 0 0 0 2.281-1.929h6.01a.321.321 0 1 0 0-.642zm-8.29 1.928c-.924 0-1.675-.75-1.675-1.674a1.675 1.675 0 0 1 3.348 0c0 .923-.751 1.674-1.674 1.674z"
        fill="#FFF"
        fillRule="nonzero"
        stroke="#FFF"
        strokeWidth={0.4}
      />
    </g>
  </svg>
);

export default Filter;
