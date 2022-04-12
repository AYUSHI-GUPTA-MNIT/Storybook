import React from "react";
import Svg, { G, Path } from "react-native-svg";
const MailV = props => (
  <Svg viewBox="0 0 25 23" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-13-15h48v48h-48z" />
      <G
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M3 1h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z" />
        <Path d="M21 3l-10 7L1 3" />
      </G>
      <Path d="M11 9h16v16H11z" />
      <Path
        fill="#21A64D"
        fillRule="nonzero"
        d="M18.996 11.4a5.596 5.596 0 1 0 0 11.191 5.596 5.596 0 0 0 0-11.191z"
      />
      <Path
        fill="#FFF"
        d="M17.97 19.87l-2.465-2.464.822-.821 1.642 1.643 3.696-3.696.821.821z"
      />
    </G>
  </Svg>
);

export default MailV;
