import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native-web";

const PickerExample = () => {
  const [user, updateUser] = useState("");
  return (
    <View>
      <Picker selectedValue={user} onValueChange={updateUser}>
        <Picker.Item label="Steve" value="steve" />
        <Picker.Item label="Ellen" value="ellen" />
        <Picker.Item label="Maria" value="maria" />
      </Picker>
      <Text>{user}</Text>
    </View>
  );
};
export default PickerExample;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red"
  }
});
