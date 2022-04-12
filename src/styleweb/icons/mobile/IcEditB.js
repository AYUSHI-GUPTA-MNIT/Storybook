import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcEditB = props => (
  <Svg
    fill={props.color}
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 3l5 5L8 21H3v-5z"
      />
    </G>
  </Svg>
);

export default IcEditB;
