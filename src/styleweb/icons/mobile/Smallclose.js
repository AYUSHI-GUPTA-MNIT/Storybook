import React from "react";
import Svg, { G, Path } from "react-native-svg";
const Smallclose = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M16 8l-8 8m0-8l8 8"
        stroke="#5E6E80"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </G>
  </Svg>
);

export default Smallclose;
