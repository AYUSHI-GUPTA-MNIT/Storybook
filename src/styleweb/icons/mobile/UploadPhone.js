import React from "react";
import Svg, { G, Path } from "react-native-svg";
const UploadPhone = props => (
  <Svg viewBox="0 0 20 16" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-2-4h24v24H-2z" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M18 2h-8L8 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H2V4h16v10z"
      />
    </G>
  </Svg>
);

export default UploadPhone;
