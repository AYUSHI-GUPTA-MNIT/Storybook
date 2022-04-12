import React from "react";
import Svg, { G, Path } from "react-native-svg";
const AddPhoto = props => (
  <Svg
    viewBox="0 0 16 16"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M-4-4h24v24H-4z" />
      <Path
        d="M15.071 8H.93M8 .929V15.07"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </G>
  </Svg>
);

export default AddPhoto;
