import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const IcViewG = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <G
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(1 4)"
      >
        <Path d="M0 8s4-8 11-8 11 8 11 8-4 8-11 8S0 8 0 8z" />
        <Circle cx={11} cy={8} r={3} />
      </G>
    </G>
  </Svg>
);

export default IcViewG;
