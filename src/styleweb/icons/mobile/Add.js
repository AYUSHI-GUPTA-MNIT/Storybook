import React from "react";
import Svg, { G, Path } from "react-native-svg";
const Add = props => (
  <Svg viewBox="0 0 14 14" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-5-5h24v24H-5z" />
      <Path
        d="M7 1v12M1 7h12"
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </G>
  </Svg>
);

export default Add;
