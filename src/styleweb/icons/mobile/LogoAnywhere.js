import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const LogoAnywhere = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <G
      fill={props.color}
      fillRule="evenodd"
      stroke="#1476CC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.225}
      transform="translate(5 5)"
    >
      <Circle cx={7} cy={7} r={7} />
      <Path d="M0 7h14M7 0a10.71 10.71 0 0 1 2.8 7A10.71 10.71 0 0 1 7 14a10.71 10.71 0 0 1-2.8-7A10.71 10.71 0 0 1 7 0z" />
    </G>
  </Svg>
);

export default LogoAnywhere;
