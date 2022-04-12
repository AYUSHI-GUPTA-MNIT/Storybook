import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const TabMoreSelected = props => (
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
        fill="#1476CC"
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        transform="translate(11 4)"
      >
        <Circle cx={1} cy={8} r={1.6} />
        <Circle cx={1} cy={1} r={1.6} />
        <Circle cx={1} cy={15} r={1.6} />
      </G>
    </G>
  </Svg>
);

export default TabMoreSelected;
