import React from "react";

const New = props => (
  <svg viewBox="0 0 35 20" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect width={35} height={20} fill="#FD9" rx={2} />
      <text
        fill="#1F2933"
        fontFamily="Roboto-Medium, Roboto"
        fontSize={12}
        fontWeight={400}
        letterSpacing={0.4}
      >
        <tspan x={4} y={15}>
          NE
        </tspan>
        <tspan x={20.286} y={15}>
          W
        </tspan>
      </text>
    </g>
  </svg>
);

export default New;
