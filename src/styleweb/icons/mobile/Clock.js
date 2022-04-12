import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const Clock = props => (
  <Svg viewBox="0 0 20 20" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-2-2h24v24H-2z" />
      <G
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        transform="translate(1.667 1.667)"
      >
        <Circle cx={8.333} cy={8.333} r={8.333} />
        <Path d="M8.333 3.333v5L11.667 10" />
      </G>
    </G>
  </Svg>
);

export default Clock;
