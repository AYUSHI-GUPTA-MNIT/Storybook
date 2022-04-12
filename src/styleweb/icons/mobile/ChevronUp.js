import React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronUp = props => (
  <Svg viewBox="0 0 10 6" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-7-10h24v24H-7z" />
      <Path
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5L5 1 1 5"
      />
    </G>
  </Svg>
);

export default ChevronUp;
