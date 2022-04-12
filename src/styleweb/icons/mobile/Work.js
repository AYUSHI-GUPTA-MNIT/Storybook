import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
const Work = props => (
  <Svg viewBox="0 0 20 20" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h20v20H0z" />
      <G
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        transform="translate(3 3)"
      >
        <Rect width={15} height={10.5} y={3} rx={2} />
        <Path d="M10.5 13.5v-12A1.5 1.5 0 0 0 9 0H6a1.5 1.5 0 0 0-1.5 1.5v12" />
      </G>
    </G>
  </Svg>
);

export default Work;
