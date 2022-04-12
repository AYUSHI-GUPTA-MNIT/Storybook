import React from "react";
import Svg, { G, Path } from "react-native-svg";
const BackChevron = props => (
  <Svg
    viewBox="0 0 14 14"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M-5-5h24v24H-5z" />
      <Path
        d="M13 7H1m6 6L1 7l6-6"
        stroke="#818E99"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </G>
  </Svg>
);

export default BackChevron;
