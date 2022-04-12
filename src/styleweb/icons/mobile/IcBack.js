import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcBack = props => (
  <Svg
    viewBox="0 0 6 10"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M15-7H-9v24h24z" />
      <Path
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 9L1 5l4-4"
      />
    </G>
  </Svg>
);

export default IcBack;
