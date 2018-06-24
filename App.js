//@flow
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Display from "./components/Display";


export const Navigator = new createStackNavigator({
  Display: {
    screen: Display
  }
});

export default class App extends React.Component<{}> {
  render() {
    return (
      <Navigator />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
