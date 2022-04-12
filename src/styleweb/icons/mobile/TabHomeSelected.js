import React from "react";
import Svg, { G, Path } from "react-native-svg";
const TabHomeSelected = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <G fill="#1476CC" fillRule="nonzero">
        <Path d="M3.622 13.525h1.466v5.836a.63.63 0 0 0 .628.626h4.294a.629.629 0 0 0 .628-.626v-4.273h2.618v4.273a.63.63 0 0 0 .629.626h4.084a.629.629 0 0 0 .628-.626v-5.836h1.78a.628.628 0 0 0 .576-.385.626.626 0 0 0-.136-.678l-8.19-8.264a.628.628 0 0 0-.879-.01l-8.556 8.264a.624.624 0 0 0 .43 1.073z" />
        <Path d="M12.167 5.522l6.702 6.753h-.9a.629.629 0 0 0-.629.625v5.836h-2.827v-4.273a.629.629 0 0 0-.628-.625H10.01a.629.629 0 0 0-.628.625v4.273H6.345V12.9a.629.629 0 0 0-.629-.625h-.544l6.995-6.753z" />
      </G>
    </G>
  </Svg>
);

export default TabHomeSelected;
