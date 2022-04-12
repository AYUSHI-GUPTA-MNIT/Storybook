import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcSpeakerG = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <G
        stroke="#444"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M12 3c-1.105 0-2 .96-2 2.143v5.714c0 1.184.895 2.143 2 2.143s2-.96 2-2.143V5.143C14 3.959 13.105 3 12 3z" />
        <Path d="M18 9v1.778C18 14.214 15.314 17 12 17s-6-2.786-6-6.222V9m6 8v3m-4 1h8" />
      </G>
    </G>
  </Svg>
);

export default IcSpeakerG;
