import React from "react";
import Svg, { Path } from "react-native-svg";
const RadioButtonChecked = props => (
  <Svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <Path
      fill={props.color}
      d="M20 33.4q5.5 0 9.4-4t4-9.4-4-9.4-9.4-4-9.4 4-4 9.4 4 9.4 9.4 4zm0-30q6.9 0 11.8 4.8T36.6 20t-4.8 11.8T20 36.6 8.2 31.8 3.4 20 8.2 8.2 20 3.4zm0 8.2q3.4 0 5.9 2.5t2.5 5.9-2.5 5.9-5.9 2.5-5.9-2.5-2.5-5.9 2.5-5.9 5.9-2.5z"
    />
  </Svg>
);

export default RadioButtonChecked;
