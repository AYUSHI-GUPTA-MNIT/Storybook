import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcRupeeG = props => (
  <Svg viewBox="0 0 9 15" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-4-1h16v16H-4z" />
      <Path
        d="M4.5 1v13M7.417 3.364H3.042C1.914 3.364 1 4.29 1 5.432S1.914 7.5 3.042 7.5h2.916C7.086 7.5 8 8.426 8 9.568s-.914 2.068-2.042 2.068H1"
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.12}
      />
    </G>
  </Svg>
);

export default IcRupeeG;
