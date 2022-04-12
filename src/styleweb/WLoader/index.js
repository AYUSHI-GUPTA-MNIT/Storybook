import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native-web";
import globalStyles from "../globalStyles.config";

const WLoader = ({ color }) => (
  <View>
    <ActivityIndicator size="large" color={color} />
  </View>
);

export default WLoader;
