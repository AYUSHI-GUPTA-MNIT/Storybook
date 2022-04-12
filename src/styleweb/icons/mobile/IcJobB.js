import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
const IcJobB = props => (
  <Svg viewBox="0 0 13 12" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-2-2h16v16H-2z" />
      <G
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.12}
        transform="translate(1 1)"
      >
        <Rect width={11} height={7.778} y={2.222} rx={1.12} />
        <Path d="M7.7 10V1.111C7.7.497 7.208 0 6.6 0H4.4c-.608 0-1.1.497-1.1 1.111V10" />
      </G>
    </G>
  </Svg>
);

export default IcJobB;
