import React from "react";
import Svg, { G, Path } from "react-native-svg";
const DownloadResume = props => (
  <Svg
    viewBox="0 0 20 20"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h20v20H0z" />
      <G
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      >
        <Path d="M16.3 11.63v3.111c0 .86-.7 1.556-1.56 1.556H5.26A1.56 1.56 0 0 1 3.7 14.74v-3.11" />
        <Path d="M6.111 8.7L10 12.589 13.889 8.7M10 12.4V3.7" />
      </G>
    </G>
  </Svg>
);

export default DownloadResume;
