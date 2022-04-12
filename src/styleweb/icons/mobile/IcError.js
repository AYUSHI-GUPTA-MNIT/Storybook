import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const IcError = props => (
  <Svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h16v16H0z" />
      <G transform="translate(2.5 2.5)">
        <Circle cx={5.5} cy={5.5} r={5.5} fill="#D93016" />
        <Path
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M7.15 3.85l-3.3 3.3m0-3.3l3.3 3.3"
        />
      </G>
    </G>
  </Svg>
);

export default IcError;
