import React from "react";
import Svg, { G, Path } from "react-native-svg";
const ProfilePhoneIcon = props => (
  <Svg
    viewBox="0 0 16 16"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h16v16H0z" />
      <Path
        stroke="#818E99"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.667 11.28v2a1.333 1.333 0 0 1-1.454 1.333 13.193 13.193 0 0 1-5.753-2.046 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1.333h2c.67-.006 1.24.484 1.333 1.147a8.56 8.56 0 0 0 .467 1.873 1.333 1.333 0 0 1-.3 1.407l-.847.847a10.667 10.667 0 0 0 4 4l.847-.847c.37-.366.92-.483 1.407-.3a8.56 8.56 0 0 0 1.873.467c.67.094 1.163.676 1.147 1.353z"
      />
    </G>
  </Svg>
);

export default ProfilePhoneIcon;
