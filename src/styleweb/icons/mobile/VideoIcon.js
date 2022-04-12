import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
const VideoIcon = props => (
  <Svg viewBox="0 0 15 10" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-3-5h20v20H-3z" />
      <G
        stroke="#117332"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        transform="translate(1 1)"
      >
        <Path d="M13 1.143L8.864 4 13 6.857z" />
        <Rect width={8.864} height={8} rx={1.143} />
      </G>
    </G>
  </Svg>
);

export default VideoIcon;
