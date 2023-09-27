// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Estimate() {
  return (
    <View style={styles.container}>
      <Text>AYYYYY!</Text>
      {/* <StatusBar style="auto" /> */}
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Enter weight"
        // onChangeText={setInputWeight}
        // value={inputWeight}
        backgroundColor="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
