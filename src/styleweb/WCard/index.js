import React from "react";

import { Platform, Dimensions } from "react-native-web";
import ReactCard from "./ReactCard";
import WText from "../WText";

const buttonWidthHeight = {
  width: "20%",
  height: "170px"
};
console.log(buttonWidthHeight);
const WCard = props => (
  <ReactCard style={{ ...buttonWidthHeight, display: "inline-block" }}>
    <WText>hj</WText>
  </ReactCard>
);

export default WCard;
