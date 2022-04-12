import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcChevronB = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 18l6-6-6-6"
      />
    </G>
  </Svg>
);

export default IcChevronB;
