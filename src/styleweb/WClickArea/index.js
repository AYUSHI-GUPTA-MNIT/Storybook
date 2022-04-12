import React from "react";
import { TouchableOpacity } from "react-native";

const WClickArea = ({
  onClick,
  children,
  style,
  accessibilityRole,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      {...restProps}
      onPress={onClick}
      style={style}
      accessibilityRole={accessibilityRole}
    >
      {children}
    </TouchableOpacity>
  );
};

export default WClickArea;
