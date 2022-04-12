import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Use
} from "react-native-svg";

// SVGR has dropped some elements not supported by react-native-svg: mask
const Bg = props => (
  <Svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 360 148"
    width="1em"
    height="1em"
    {...props}
  >
    <Defs>
      <LinearGradient id="b" x1="75.16%" x2="-12.209%" y1="17.593%" y2="131.3%">
        <Stop offset="0%" stopColor="#2D80C9" />
        <Stop offset="100%" stopColor="#1167B3" />
      </LinearGradient>
      <Path id="a" d="M0 0h360v148H0z" />
      <LinearGradient id="c" x1="7.37%" x2="50%" y1="22.691%" y2="52.004%">
        <Stop offset="0%" stopColor="#61A2DB" />
        <Stop offset="100%" stopColor="#1167B3" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1="11.143%"
        x2="88.857%"
        y1="18.534%"
        y2="81.466%"
      >
        <Stop offset="0%" stopColor="#679AC7" />
        <Stop offset="100%" stopColor="#1167B3" />
      </LinearGradient>
    </Defs>
    <G fill={props.color} fillRule="evenodd">
      <Use fill="url(#b)" xlinkHref="#a" />
      <Path
        fill="url(#c)"
        d="M-58.858 197.437L179.896-97.401l154.38 125.015L95.523 322.452z"
        mask="url(#d)"
        opacity={0.3}
      />
      <Path
        fill="url(#e)"
        d="M-20.218 295.62L218.536.784l154.38 125.015-238.754 294.837z"
        mask="url(#d)"
        opacity={0.3}
      />
    </G>
  </Svg>
);

export default Bg;
