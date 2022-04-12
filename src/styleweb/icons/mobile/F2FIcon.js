import React from "react";
import Svg, { G, Path, Ellipse } from "react-native-svg";
const F2FIcon = props => (
  <Svg viewBox="0 0 14 12" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-3-4h20v20H-3z" />
      <G
        stroke="#117332"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="translate(1 1)"
      >
        <Path d="M8.727 10V8.889c0-1.227-.977-2.222-2.182-2.222H2.182C.977 6.667 0 7.662 0 8.889V10" />
        <Ellipse cx={4.364} cy={2.222} rx={2.182} ry={2.222} />
        <Path d="M12 10V8.889a2.215 2.215 0 0 0-1.636-2.15M8.182.072a2.215 2.215 0 0 1 1.64 2.153 2.215 2.215 0 0 1-1.64 2.153" />
      </G>
    </G>
  </Svg>
);

export default F2FIcon;
