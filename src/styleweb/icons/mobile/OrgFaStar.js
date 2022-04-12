import React from "react";
import Svg, { G, Path } from "react-native-svg";
const OrgFaStar = props => (
  <Svg viewBox="0 0 14 13" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-1-1h16v16H-1z" />
      <Path
        stroke="#1476CC"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M7 9.862l-3.336 1.884a.1.1 0 0 1-.147-.107l.76-3.754-2.822-2.591a.1.1 0 0 1 .056-.173l3.807-.437L6.909 1.2a.1.1 0 0 1 .182 0l1.591 3.485 3.807.437a.1.1 0 0 1 .056.173l-2.823 2.59.761 3.755a.1.1 0 0 1-.147.107L7 9.862z"
      />
    </G>
  </Svg>
);

export default OrgFaStar;
