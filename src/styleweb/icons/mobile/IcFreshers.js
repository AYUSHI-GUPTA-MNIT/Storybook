import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcFreshers = props => (
  <Svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h16v16H0z" />
      <Path
        fill="#21A64D"
        fillRule="nonzero"
        d="M7.996 2.4a5.596 5.596 0 1 0 0 11.191 5.596 5.596 0 0 0 0-11.191z"
      />
      <Path
        fill="#FFF"
        d="M6.97 10.87L4.504 8.406l.822-.821 1.642 1.643 3.696-3.696.821.821z"
      />
    </G>
  </Svg>
);

export default IcFreshers;
