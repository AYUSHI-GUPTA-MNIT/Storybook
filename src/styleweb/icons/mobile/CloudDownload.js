import React from "react";
import Svg, { G, Path } from "react-native-svg";
const CloudDownload = props => (
  <Svg
    viewBox="0 0 20 14"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0-3h20v20H0z" />
      <G fill="#3D85C3" fillRule="nonzero">
        <Path d="M16.125 5.367A6.242 6.242 0 0 0 10 .333 6.246 6.246 0 0 0 4.458 3.7 4.995 4.995 0 0 0 0 8.667c0 2.758 2.242 5 5 5h10.833C18.133 13.667 20 11.8 20 9.5c0-2.2-1.708-3.983-3.875-4.133zM15.833 12H5a3.332 3.332 0 0 1-3.333-3.333 3.311 3.311 0 0 1 2.966-3.309l.892-.091.417-.792A4.557 4.557 0 0 1 10 2a4.586 4.586 0 0 1 4.492 3.692l.25 1.25 1.275.091A2.483 2.483 0 0 1 18.333 9.5c0 1.375-1.125 2.5-2.5 2.5z" />
        <Path d="M11.208 5.333H8.792v2.5H6.667L10 11.167l3.333-3.334h-2.125z" />
      </G>
    </G>
  </Svg>
);

export default CloudDownload;
