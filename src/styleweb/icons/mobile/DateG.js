import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
const DateG = props => (
  <Svg viewBox="0 0 14 15" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-3-3h20v20H-3z" />
      <G
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        transform="translate(1 1)"
      >
        <Rect width={12} height={11.7} y={1.3} rx={1.3} />
        <Path d="M8.667 0v2.6M3.333 0v2.6M0 5.2h12" />
      </G>
    </G>
  </Svg>
);

export default DateG;
