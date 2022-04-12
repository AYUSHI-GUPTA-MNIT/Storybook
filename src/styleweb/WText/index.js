import React from "react";
import { Text, StyleSheet, Platform } from "react-native-web";
import globalStyles from "./../globalStyles.config";

const WText = ({ type, style, children, ...restProps }) => {
  return (
    <Text style={[styles.defaultStyle, styles[type], style]} {...restProps}>
      {children}
    </Text>
  );
};

const typeScale = {
  helpText: [10, "400", 16, 1.25],
  hintText: [12, "400", 16, 0.1],
  tagName: [12, "500", 16, 0.05],
  tagName2: [12, "500", 20, 0.05],
  text: [14, "400", 20, 0],
  longText: [14, "400", 24, 0],
  subtitle: [14, "500", 24, 0],
  button: [14, "500", 20, 0.4],
  text2: [16, "400", 24, 0.1],
  subtitle2: [16, "500", 28, 0.05],
  button2: [16, "500", 24, 0.4],
  title: [20, "500", 28, 0.1],
  headline: [24, "400", 32, 0],
  headline2: [32, "400", 40, 0],
  headline3: [48, "400", 56, 0]
};

const typeScaleObj = Object.keys(typeScale).reduce((nobj, key) => {
  nobj[key] = {};
  nobj[key].fontSize = typeScale[key][0];
  nobj[key].fontWeight = typeScale[key][1];
  nobj[key].lineHeight = typeScale[key][2];
  nobj[key].letterSpacing = typeScale[key][3];
  return nobj;
}, {});

const stylesObj = {
  defaultStyle: {
    fontFamily: globalStyles.defaultFontFamily,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    ...Platform.select({
      android: {
        fontFamily: "Roboto"
      },
      ios: {
        fontFamily: "System" // San Francisco
      }
    })
  },
  ...typeScaleObj
};

const styles = StyleSheet.create(stylesObj);

export default WText;
