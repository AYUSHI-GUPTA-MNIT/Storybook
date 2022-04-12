import React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowBack = props => (
  <Svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <Path
      fill={props.color}
      d="M33.4 18.4v3.2H13l9.3 9.4-2.3 2.4L6.6 20 20 6.6 22.3 9 13 18.4h20.4z"
    />
  </Svg>
);

export default ArrowBack;
