import React from "react";
import Svg, { G, Rect, Text, TSpan } from "react-native-svg";
const New = props => (
  <Svg viewBox="0 0 35 20" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Rect width={35} height={20} fill="#FD9" rx={2} />
      <Text
        fill="#1F2933"
        fontFamily="Roboto-Medium, Roboto"
        fontSize={12}
        fontWeight={400}
        letterSpacing={0.4}
      >
        <TSpan x={4} y={15}>
          NE
        </TSpan>
        <TSpan x={20.286} y={15}>
          W
        </TSpan>
      </Text>
    </G>
  </Svg>
);

export default New;
