import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcKeyboardArrowRight = props => (
  <Svg viewBox="0 0 5 8" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-8 14h20V-6H-8z" />
      <Path fill="#3D85C3" d="M0 7.06L2.931 4 0 .94.902 0l3.84 4-3.84 4z" />
    </G>
  </Svg>
);

export default IcKeyboardArrowRight;
