import { Dropdown } from "react-native-element-dropdown";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Estimate() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginTop: 70 }}>Compare Prices</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 80,
          paddingHorizontal: 50,
        }}
      >
        <Image
          style={styles.fedExImage}
          source={require("../images/fedex.png")}
        />
        <Text style={{ fontSize: 25 }}>$18.38</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 40,
          paddingHorizontal: 50,
        }}
      >
        <Image style={styles.uPSImage} source={require("../images/ups.png")} />
        <Text style={{ fontSize: 25, bottom: 10 }}>$16.42</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 40,
          paddingHorizontal: 50,
        }}
      >
        <Image
          style={styles.uSPSImage}
          source={require("../images/usps.png")}
        />
        <Text style={{ fontSize: 25 }}>$20.10</Text>
      </View>
      <View></View>

      <View style={{ marginTop: 30 }}></View>
      <View style={styles.buttonContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBC3E3",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    padding: 10,
    marginTop: 30,
    width: 200,
    height: 50,
    borderColor: "gray",
  },
  dropdown: {
    height: 50,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    padding: 40,
  },
  fedExImage: { right: 60, bottom: 90 },
  uPSImage: { right: 50, bottom: 70 },
  uSPSImage: { right: 40, bottom: 50 },
});
