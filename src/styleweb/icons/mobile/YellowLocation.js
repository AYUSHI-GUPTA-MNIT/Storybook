import React from "react";
import Svg, { G, Path } from "react-native-svg";
const YellowLocation = props => (
  <Svg viewBox="0 0 10 12" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-3-2h16v16H-3z" />
      <Path
        fill="#F2A200"
        d="M9.667 5.303C9.667 8.909 5 12 5 12S.333 8.91.333 5.303C.333 2.743 2.423.667 5 .667s4.667 2.075 4.667 4.636zM5 7a1.667 1.667 0 1 0 0-3.333A1.667 1.667 0 0 0 5 7z"
      />
    </G>
  </Svg>
);

export default YellowLocation;
