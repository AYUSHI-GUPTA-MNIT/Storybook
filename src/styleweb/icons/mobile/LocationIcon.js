import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const LocationIcon = props => (
  <Svg
    viewBox="0 0 14 16"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M-1 0h16v16H-1z" />
      <G
        stroke="#818E99"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 .667)"
      >
        <Path d="M12 6c0 4.667-6 8.667-6 8.667s-6-4-6-8.667a6 6 0 0 1 12 0z" />
        <Circle cx={6} cy={6} r={2} />
      </G>
    </G>
  </Svg>
);

export default LocationIcon;
