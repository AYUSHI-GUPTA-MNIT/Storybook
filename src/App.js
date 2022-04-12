import React, { useState } from "react";
import { StyleSheet, View, Text, Button, CheckBox } from "react-native";
import SnackBar from "../src/styleweb/WSnackbar";

function App() {
  const DisplaySnackBar = () => {};
  const skillOptions = ["Programming", "Development", "Design", "Testing"];
  const [skills, updateskills] = useState([]);
  const handleCheckBox = e => {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (skills.indexOf(newSelection) > -1) {
      newSelectionArray = skills.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [skills, newSelection];
    }
    updateskills(newSelectionArray);
    console.log(newSelectionArray);
    //console.log("ABCD", this.state.newUser.skillOptions.newSelectionArray);
  };
  return (
    <div>
      <View style={styles.container}>
        <SnackBar />
      </View>
    </div>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  }
});
