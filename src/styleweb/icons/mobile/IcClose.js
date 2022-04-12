import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcClose = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M17 7L7 17M7 7l10 10"
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </G>
  </Svg>
);

export default IcClose;
