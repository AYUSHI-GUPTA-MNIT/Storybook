import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcKeyboardG = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
      <Path
        fill="#818E99"
        fillRule="nonzero"
        d="M20 7v10H4V7h16zm0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-3 0h2v2H5v-2zm0-3h2v2H5V8zm3 6h8v2H8v-2zm6-3h2v2h-2v-2zm0-3h2v2h-2V8zm3 3h2v2h-2v-2zm0-3h2v2h-2V8z"
      />
    </G>
  </Svg>
);

export default IcKeyboardG;
