import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import WText from "../WText";

const SPasswordField = () => {
  const [show, change] = useState(true);
  const [pass, changepass] = useState("");
  const onchange = () => {
    change({ show: !show });
  };
  const handlePasswordChange = e => {
    changepass({ pass: e.target.value });
  };
  return (
    <View style={styles.container}>
      <input
        type={show ? "password" : "text"}
        value={pass}
        onChange={handlePasswordChange}
      />
      <button onClick={onchange}>Show / Hide</button>
    </View>
  );
};

export default SPasswordField;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
