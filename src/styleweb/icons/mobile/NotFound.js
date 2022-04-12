import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
const NotFound = props => (
  <Svg viewBox="0 0 36 48" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-18-12h72v72h-72z" />
      <G fillRule="nonzero">
        <Path
          fill="#818E99"
          d="M35.102 46.466l-4.023-6.934V11.944a1 1 0 0 0-.237-.645L21.59.354A1 1 0 0 0 20.826 0H3.343C1.548 0 .08 1.489.08 3.308v38.043c0 1.82 1.468 3.308 3.263 3.308h13.378l-1.064 1.8a1 1 0 0 0 .86 1.509h17.72a1 1 0 0 0 .865-1.502z"
        />
        <Path
          fill="#FD9"
          d="M31.301 46.314h-12.01a1 1 0 0 1-.86-1.51l6.068-10.253a1 1 0 0 1 1.726.007l5.942 10.254a1 1 0 0 1-.866 1.502z"
        />
        <Path
          fill="#FFF"
          d="M3.343 43.005a1.646 1.646 0 0 1-1.631-1.654V3.308c0-.827.652-1.654 1.631-1.654h16.315v8.27c0 1.82 1.469 3.308 3.263 3.308h6.526V36.72l-3.21-5.469a1 1 0 0 0-1.728.005L17.7 43.006H3.343z"
        />
        <Path
          fill="#FFF"
          d="M21.29 2.481l7.668 9.097H22.92c-.816 0-1.631-.827-1.631-1.654V2.481z"
        />
        <Rect
          width={1.632}
          height={1.654}
          x={24.553}
          y={43.005}
          fill="#818E99"
          rx={0.816}
        />
        <Rect
          width={1.632}
          height={4.962}
          x={24.553}
          y={36.389}
          fill="#818E99"
          rx={0.816}
        />
      </G>
    </G>
  </Svg>
);

export default NotFound;
