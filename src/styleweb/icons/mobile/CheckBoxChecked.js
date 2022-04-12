import React from "react";
import Svg, { Path } from "react-native-svg";
const CheckBoxChecked = props => (
  <Svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <Path
      fill={props.color}
      d="M16.6 28.4l15-15-2.3-2.5-12.7 12.7-5.9-5.9L8.4 20zM31.6 5C33.5 5 35 6.6 35 8.4v23.2c0 1.8-1.5 3.4-3.4 3.4H8.4C6.5 35 5 33.4 5 31.6V8.4C5 6.6 6.5 5 8.4 5h23.2z"
    />
  </Svg>
);

export default CheckBoxChecked;
