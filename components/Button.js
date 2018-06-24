import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Button extends React.Component {
  handleInput = () => {
    this.props.handleInput(this.props.value);
  };

  render() {
    return (
      <TouchableOpacity style={button} onPress={this.handleInput}>
        <Text style={buttonText}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 0,
    width: "20%",
    height: 70,
    backgroundColor: "#e50914",
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});

const { button, buttonText } = styles;
