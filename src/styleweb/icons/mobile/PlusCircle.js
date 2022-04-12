import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const PlusCircle = props => (
  <Svg
    viewBox="0 0 14 14"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G
      fill="none"
      fillRule="evenodd"
      stroke="#1476CC"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(1 1)"
    >
      <Circle cx={6} cy={6} r={6} />
      <Path d="M6 3.6v4.8M3.6 6h4.8" />
    </G>
  </Svg>
);

export default PlusCircle;
