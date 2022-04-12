import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcCloseW = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M18 6L6 18M6 6l12 12"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </G>
  </Svg>
);

export default IcCloseW;
