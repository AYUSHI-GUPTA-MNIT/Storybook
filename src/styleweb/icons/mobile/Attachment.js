import React from "react";
import Svg, { Path } from "react-native-svg";
const Attachment = props => (
  <Svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <Path
      fill={props.color}
      d="M3.4 20.9c0-5.1 4-9.3 9.1-9.3H30c3.7 0 6.6 3.1 6.6 6.8S33.7 25 30 25H15.9c-2.3 0-4.3-1.9-4.3-4.1s2-4.3 4.3-4.3h12.5V20H15.7c-.9 0-.9 1.6 0 1.6H30c1.8 0 3.4-1.4 3.4-3.2S31.8 15 30 15H12.5c-3.2 0-5.9 2.7-5.9 5.9s2.7 5.7 5.9 5.7h15.9V30H12.5c-5.1 0-9.1-4.1-9.1-9.1z"
    />
  </Svg>
);

export default Attachment;
