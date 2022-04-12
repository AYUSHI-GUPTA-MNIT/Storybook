import React from "react";
import { ScrollView } from "react-native";

/*
Android does the right thing by default whenever the user focuses on an input text below the fold where the keyboard 
is shown and pushes the content up.
Browsers also do the right thing by default. Only custom implementation in this case needs to be there for iOS.
 */

const NormalScrollView = ({ children, ...restProps }) => {
  return <ScrollView {...restProps}>{children}</ScrollView>;
};

export default NormalScrollView;
