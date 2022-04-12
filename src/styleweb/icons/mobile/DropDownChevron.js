import React from "react";
import Svg, { G, Path } from "react-native-svg";
const DropDownChevron = props => (
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
        stroke="#5E6E80"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M8 10l4 4 4-4"
      />
    </G>
  </Svg>
);

export default DropDownChevron;
