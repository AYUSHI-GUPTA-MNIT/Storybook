import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const Search = props => (
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
        stroke="#444"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(3 3)"
      >
        <Circle cx={8} cy={8} r={8} />
        <Path d="M18 18l-4.35-4.35" />
      </G>
    </G>
  </Svg>
);

export default Search;
