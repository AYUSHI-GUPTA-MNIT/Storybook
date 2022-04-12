import React from "react";
import Svg, { G, Path } from "react-native-svg";
const Verify = props => (
  <Svg viewBox="0 0 12 10" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-4-5h20v20H-4z" />
      <Path
        fill="#21A64D"
        fillRule="nonzero"
        d="M.138 5.077A.499.499 0 0 1 0 4.754c0-.092.046-.23.138-.323l.647-.646a.446.446 0 0 1 .646 0l.046.046 2.538 2.723a.224.224 0 0 0 .323 0L10.523.138h.046a.446.446 0 0 1 .646 0l.647.647a.446.446 0 0 1 0 .646L4.477 9.092a.419.419 0 0 1-.323.139.419.419 0 0 1-.323-.139L.23 5.215l-.093-.138z"
      />
    </G>
  </Svg>
);

export default Verify;
