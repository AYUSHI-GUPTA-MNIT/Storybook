import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
const CalendarIcon = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <G
        stroke="#667480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        transform="translate(5 4)"
      >
        <Rect width={15} height={14.4} y={1.6} rx={1.635} />
        <Path d="M10.833 0v3.2M4.167 0v3.2M0 6.4h15" />
      </G>
    </G>
  </Svg>
);

export default CalendarIcon;
