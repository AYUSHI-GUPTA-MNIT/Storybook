import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native-web";
import WText from "../WText";
import globalStyles from "./../globalStyles.config";
import WLoader from "../WLoader";

const WButton = ({
  text,
  type,
  color,
  style,
  textStyle,
  containerStyle,
  renderComponent,
  showOverlay,
  loading,
  onClick
}) => {
  return (
    <View style={[styles.buttonArea, containerStyle]}>
      <TouchableOpacity onPress={onClick} style={style}>
        <View
          style={[
            styles.defaultStyle,
            styles[type],
            color && { backgroundColor: color },
            style
          ]}
          accessibilityRole="button"
        >
          {renderComponent ? (
            renderComponent
          ) : (
            <WText style={[textStyles[type], textStyle]}>{text}</WText>
          )}
          {showOverlay ? <View style={styles.overlay} /> : null}
          {loading ? <WLoader color={"#ffffff"} /> : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const buttonWidthHeight = {
  width: "20%",
  height: 36
};

const styles = StyleSheet.create({
  buttonArea: {
    paddingTop: 6,
    paddingBottom: 6
  },
  defaultStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    borderBottomWidth: 0,
    borderBottomColor: globalStyles.colors.paper.darker
  },
  raised: {
    ...buttonWidthHeight,
    backgroundColor: globalStyles.colors.blue.primary
  },
  outlined: {
    ...buttonWidthHeight,
    backgroundColor: globalStyles.colors.paper.primary,
    borderRadius: 1,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: globalStyles.colors.paper.darkest,
    borderBottomColor: globalStyles.colors.paper.darkest
  },
  inline: {},
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.16)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

const textStyles = StyleSheet.create({
  raised: {
    color: globalStyles.colors.paper.primary
  },
  outlined: {
    color: globalStyles.colors.blue.accent
  },
  inline: {
    color: globalStyles.colors.blue.accent
  }
});

export default WButton;
