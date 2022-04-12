import React from "react";
import Svg, { Path } from "react-native-svg";
const Schedule = props => (
  <Svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <Path
      fill={props.color}
      d="M20.9 11.6v8.8l7.5 4.4-1.3 2.2-8.7-5.4v-10h2.5zM20 33.4c7.3 0 13.4-6.1 13.4-13.4S27.3 6.6 20 6.6 6.6 12.7 6.6 20 12.7 33.4 20 33.4zm0-30c9.2 0 16.6 7.4 16.6 16.6S29.2 36.6 20 36.6 3.4 29.2 3.4 20 10.8 3.4 20 3.4z"
    />
  </Svg>
);

export default Schedule;
