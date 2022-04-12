import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { View, StyleSheet } from "react-native-web";
// eslint-disable-next-line import/extensions
import WButton from "../styleweb/WButton";
import { action } from "@storybook/addon-actions";
import WText from "../styleweb/WText";
import WLoader from "../styleweb/WLoader";
import WCard from "../styleweb/WCard";
import WCheckBox from "../styleweb/WCheckbox";
import SnackBar from "../styleweb/WSnackbar";
import WDrop from "../styleweb/WDrop";
import WTextInput from "../styleweb/WInputField";

storiesOf("Button", module).add("with text", () => (
  <WButton
    text="helllloooooo"
    type={"raised"}
    loading={false}
    onClick={action("clicked")}
  />
));
storiesOf("Text", module).add("with text", () => <WText> hj</WText>);
storiesOf("Loader", module).add("with text", () => <WLoader loading={false} />);
storiesOf("Card", module).add("with text", () => <WCard />);
storiesOf("checkbox", module).add("with text", () => {
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
    action(newSelectionArray);
    console.log(newSelectionArray);
    //console.log("ABCD", this.state.newUser.skillOptions.newSelectionArray);
  };
  return (
    <div>
      <View>
        <WCheckBox
          title={"Skills"}
          name={"skills"}
          options={skillOptions}
          selectedOptions={skillOptions.indexOf(skills) > -1}
          handleChange={handleCheckBox}
        />
      </View>
    </div>
  );
});
storiesOf("DropDown", module).add("with text", () => <WDrop />);
storiesOf("Toast", module).add("with text", () => <SnackBar />);
storiesOf("Password", module).add("with text", () => {
  const [show, change] = useState(false);
  const [pass, changepass] = useState(" ");
  const onchange = () => {
    change(!show);
  };
  const handlePasswordChange = e => {
    e.preventDefault();
    changepass(e.target.value);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
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
});
storiesOf("TextInputField", module).add("with text", () => <WTextInput />);
