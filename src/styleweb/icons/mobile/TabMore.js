import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const TabMore = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <G
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        transform="translate(11 4)"
      >
        <Circle cx={1} cy={8} r={1.7} />
        <Circle cx={1} cy={1} r={1.7} />
        <Circle cx={1} cy={15} r={1.7} />
      </G>
    </G>
  </Svg>
);

export default TabMore;
