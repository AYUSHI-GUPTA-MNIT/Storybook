import React from "react";
import Svg, { G, Path } from "react-native-svg";
const Mail = props => (
  <Svg
    fill={props.color}
    viewBox="0 0 22 18"
    width="1em"
    height="1em"
    {...props}
  >
    <G
      fill="none"
      fillRule="evenodd"
      stroke="#1476CC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M3 1h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z" />
      <Path d="M21 3l-10 7L1 3" />
    </G>
  </Svg>
);

export default Mail;
