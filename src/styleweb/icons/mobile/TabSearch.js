import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const TabSearch = props => (
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
        transform="translate(5 5)"
      >
        <Circle cx={6.222} cy={6.222} r={6.222} />
        <Path d="M14 14l-3.383-3.383" />
      </G>
    </G>
  </Svg>
);

export default TabSearch;
