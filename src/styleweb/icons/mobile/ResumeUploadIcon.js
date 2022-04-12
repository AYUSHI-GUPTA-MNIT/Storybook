import React from "react";
import Svg, { G, Path } from "react-native-svg";
const ResumeUploadIcon = props => (
  <Svg
    viewBox="0 0 14 17"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G
      fill="none"
      fillRule="evenodd"
      stroke="#818E99"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7.75 1H2.5A1.5 1.5 0 0 0 1 2.5v12A1.5 1.5 0 0 0 2.5 16h9a1.5 1.5 0 0 0 1.5-1.5V6.25L7.75 1z" />
      <Path d="M7.75 1v5.25H13" />
    </G>
  </Svg>
);

export default ResumeUploadIcon;
