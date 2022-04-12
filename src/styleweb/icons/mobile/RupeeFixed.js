import React from "react";
import Svg, { G, Path } from "react-native-svg";
const RupeeFixed = props => (
  <Svg
    viewBox="0 0 16 16"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h16v16H0z" />
      <G stroke="#1A4266" strokeLinecap="round">
        <Path
          strokeLinejoin="round"
          d="M3.5 2.5c4 .17 6 1.312 6 3.429 0 2.116-2 3.116-6 3l6 5.571"
        />
        <Path d="M3.5 2.5h9m-9 3h9" />
      </G>
    </G>
  </Svg>
);

export default RupeeFixed;
