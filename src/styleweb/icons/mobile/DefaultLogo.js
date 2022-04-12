import React from "react";
import Svg, { G, Path } from "react-native-svg";
const DefaultLogo = props => (
  <Svg viewBox="0 0 42 46" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path
        fill="#B3B3B3"
        d="M21 6a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1"
      />
      <Path
        fill="#E6E6E6"
        d="M29 10h-3V5a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v5h-3a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1"
      />
      <Path
        fill="#E6E6E6"
        d="M17 26H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1m24-6H25a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1"
      />
      <Path
        fill="#E6E6E6"
        d="M34 39h-2a1 1 0 0 0-1 1v6h4v-6a1 1 0 0 0-1-1m-24 1H8a1 1 0 0 0-1 1v5h4v-5a1 1 0 0 0-1-1"
      />
      <Path
        fill="#FFF"
        d="M31 28h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m6 0h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m0 6h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M7 35H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m6 0h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1"
      />
    </G>
  </Svg>
);

export default DefaultLogo;
