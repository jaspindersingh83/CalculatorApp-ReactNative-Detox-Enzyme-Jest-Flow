import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Keyboard from "./Keyboard";

export default class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      input1: "",
      operator: "",
      input2: "",
      result: ""
    };
  }
  handleInput = async value => {
    if (value === "=") {
      await this.calculateResult(
        this.state.input1,
        this.state.operator,
        this.state.input2
      );
    } else {
      if (this.state.operator.length) {
        const newInput = this.state.input2 + value;
        await this.setState({
          input2: newInput
        });
      }
      if (typeof value === "string" && !this.state.operator.length) {
        await this.setState({
          operator: value
        });
      }
      if (!this.state.operator.length) {
        const newInput = this.state.input1 + value;
        await this.setState({
          input1: newInput
        });
      }
    }
  };
  calculateResult = async (input1, operator, input2) => {
    const in1 = parseInt(input1, 10);
    const in2 = parseInt(input2, 10);
    let result;
    switch (operator) {
      case "*":
        result = in1 * in2;
        break;
      case "+":
        result = in1 + in2;
        break;
      case "-":
        result = in1 - in2;
        break;
      case "/":
        result = in1 / in2;
        break;
      default:
        result = 0;
    }
    await this.setState({
      result,
      input1: "",
      input2: "",
      operator: ""
    });
    setTimeout(() => {
      this.setState({ result: "" });
    }, 3000);
  };

  render() {
    const displayValue =
      this.state.input1 +
      this.state.operator +
      this.state.input2 +
      this.state.result;
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={this.handleInput}
          value={displayValue}
        />
        <Keyboard handleInput={this.handleInput}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
