import React from "react";
import Svg, { Path } from "react-native-svg";
const LocationOn = props => (
  <Svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <Path
      fill={props.color}
      d="M20 19.1q1.7 0 2.9-1.2t1.2-2.9-1.2-2.9-2.9-1.2-2.9 1.2-1.2 2.9 1.2 2.9 2.9 1.2zm0-15.7q4.8 0 8.2 3.4t3.4 8.2q0 2.4-1.2 5.5t-2.9 5.9-3.4 5.1-2.8 3.8L20 36.6q-.5-.5-1.2-1.4t-2.9-3.6-3.5-5.2-2.8-5.8T8.4 15q0-4.8 3.4-8.2T20 3.4z"
    />
  </Svg>
);

export default LocationOn;
