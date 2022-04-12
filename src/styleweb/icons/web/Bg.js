import React from "react";

const Bg = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 360 148"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient id="b" x1="75.16%" x2="-12.209%" y1="17.593%" y2="131.3%">
        <stop offset="0%" stopColor="#2D80C9" />
        <stop offset="100%" stopColor="#1167B3" />
      </linearGradient>
      <path id="a" d="M0 0h360v148H0z" />
      <linearGradient id="c" x1="7.37%" x2="50%" y1="22.691%" y2="52.004%">
        <stop offset="0%" stopColor="#61A2DB" />
        <stop offset="100%" stopColor="#1167B3" />
      </linearGradient>
      <linearGradient
        id="e"
        x1="11.143%"
        x2="88.857%"
        y1="18.534%"
        y2="81.466%"
      >
        <stop offset="0%" stopColor="#679AC7" />
        <stop offset="100%" stopColor="#1167B3" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="d" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="url(#b)" xlinkHref="#a" />
      <path
        fill="url(#c)"
        d="M-58.858 197.437L179.896-97.401l154.38 125.015L95.523 322.452z"
        mask="url(#d)"
        opacity={0.3}
      />
      <path
        fill="url(#e)"
        d="M-20.218 295.62L218.536.784l154.38 125.015-238.754 294.837z"
        mask="url(#d)"
        opacity={0.3}
      />
    </g>
  </svg>
);

export default Bg;
