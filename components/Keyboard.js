import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const buttonList = [7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, " ", "*", 0, "/", "="];
export default function Keyboard(props) {
  return (
    <View style={container}>
      {buttonList.map((item, index) => {
        return <Button key={index} handleInput={props.handleInput} value={item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 25,
    width:'80%'
  }
});

const { container, row } = styles;
