import React from "react";
import Svg, { G, Path } from "react-native-svg";
const EnvelopeIcon = props => (
  <Svg
    viewBox="0 0 16 12"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0-2h16v16H0z" />
      <G stroke="#818E99" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M2.667.667h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V2c0-.733.6-1.333 1.334-1.333z" />
        <Path d="M14.667 2L8 6.667 1.333 2" />
      </G>
    </G>
  </Svg>
);

export default EnvelopeIcon;
