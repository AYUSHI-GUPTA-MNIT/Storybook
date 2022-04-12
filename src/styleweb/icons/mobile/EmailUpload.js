import React from "react";
import Svg, { G, Path } from "react-native-svg";
const EmailUpload = props => (
  <Svg viewBox="0 0 18 14" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-3-5h24v24H-3z" />
      <G fillRule="nonzero">
        <Path fill="#ECEFF1" d="M2.25 0h13.5v14H2.25z" />
        <Path fill="#CFD8DC" d="M9 8.472L15.75 14V3.087z" />
        <Path
          fill="#F44336"
          d="M16.313 0h-.563L9 5.528 2.25 0h-.563C.756 0 0 .784 0 1.75v10.5C0 13.216.756 14 1.688 14h.562V3.087L9 8.471l6.75-5.385V14h.563c.931 0 1.687-.784 1.687-1.75V1.75C18 .784 17.244 0 16.312 0z"
        />
      </G>
    </G>
  </Svg>
);

export default EmailUpload;
