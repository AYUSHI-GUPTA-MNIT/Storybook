import React from "react";
import Svg, { G, Path } from "react-native-svg";
const IcActive = props => (
  <Svg viewBox="0 0 9 16" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-5-2h20v20H-5z" />
      <Path
        fill="#DEA92C"
        fillRule="nonzero"
        stroke="#DEA92C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.8}
        d="M1.801 15a.203.203 0 0 1-.105-.029.214.214 0 0 1-.09-.255L3.78 8.628l-2.63-.763a.21.21 0 0 1-.142-.142.215.215 0 0 1 .04-.199l5.334-6.449a.207.207 0 0 1 .257-.05c.087.047.13.15.103.246L5.205 6.7l2.644.768a.214.214 0 0 1 .101.342l-5.99 7.116A.208.208 0 0 1 1.8 15z"
      />
      <Path
        fill="#FAD06F"
        d="M1.6 7.365l2.602.726a.214.214 0 0 1 .132.105c.027.052.03.113.01.167L2.435 13.5 7.6 7.599l-2.598-.726a.213.213 0 0 1-.13-.1.204.204 0 0 1-.017-.159L6.214 2 1.6 7.365z"
      />
    </G>
  </Svg>
);

export default IcActive;
