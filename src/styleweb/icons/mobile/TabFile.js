import React from "react";
import Svg, { G, Path } from "react-native-svg";
const TabFile = props => (
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
      >
        <Path d="M12.75 4H7.5C6.672 4 6 4.716 6 5.6v12.8c0 .884.672 1.6 1.5 1.6h9c.828 0 1.5-.716 1.5-1.6V9.6L12.75 4z" />
        <Path d="M12.75 4v5.6H18" />
      </G>
    </G>
  </Svg>
);

export default TabFile;
