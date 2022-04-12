import React from "react";
import Svg, { G, Path } from "react-native-svg";
const TabFileSelected = props => (
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
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      >
        <Path d="M14.125 4h-6.5C6.728 4 6 4.716 6 5.6v12.8c0 .884.728 1.6 1.625 1.6h9.75c.897 0 1.625-.716 1.625-1.6V8.8L14.125 4z" />
        <Path d="M14.125 4v4.8H19m-3.25 4h-6.5m6.5 3.2h-6.5m1.625-6.4H9.25" />
      </G>
    </G>
  </Svg>
);

export default TabFileSelected;
