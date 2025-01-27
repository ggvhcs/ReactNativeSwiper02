import { Image } from "react-native";

const items = [
  { image: <Image source={require("../assets/simple1.png")} /> },
  { image: <Image source={require("../assets/simple2.png")} /> },
  { image: <Image source={require("../assets/simple1.png")} /> },
];

export function getItems() {
  return items;
}