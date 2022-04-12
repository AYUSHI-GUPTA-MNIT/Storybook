import React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronRight = props => (
  <Svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <Path fill={props.color} d="M16.6 10l10 10-10 10-2.3-2.3L22 20l-7.7-7.7z" />
  </Svg>
);

export default ChevronRight;
