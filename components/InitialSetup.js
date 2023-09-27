// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

const InitialSetup = ({ navigation }) => {
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [enteredFromZipcode, setEnteredFromZipcode] = useState();
  const [enteredToZipcode, setEnteredToZipcode] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const [inputWeight, setInputWeight] = useState();

  //   const navigation = useNavigation();

  const handleNavigateToEstimate = () => {
    navigation.navigate("Estimate");
  };

  const carriers = [
    { label: "USPS", value: "usps" },
    { label: "UPS", value: "ups" },
    { label: "FedEx", value: "fedex" },
  ];

  const units = [
    { label: "Pounds (lbs.)", value: "lbs" },
    { label: "Ounces (oz)", value: "oz" },
  ];

  const classes = [
    { label: "Priority", value: "priority" },
    { label: "First Class", value: "firstClass" },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginTop: 70 }}>
        Enter Your Preferences
      </Text>
      <View style={{ marginTop: 40 }}>
        {/* <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={carriers}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select carrier" : "..."}
          searchPlaceholder="Search..."
          value={selectedCarrier}
          //   onFocus={() => setIsFocus(true)}
          //   onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setSelectedCarrier(item.value);
            // setIsFocus(false);
          }}
        /> */}
      </View>
      <View style={{ marginTop: 30 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={units}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select unit" : "..."}
          searchPlaceholder="Search..."
          value={selectedUnit}
          //   onFocus={() => setIsFocus(true)}
          //   onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setSelectedUnit(item.value);
            // setIsFocus(false);
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Enter weight"
          onChangeText={setInputWeight}
          value={inputWeight}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={classes}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select priority" : "..."}
          searchPlaceholder="Search..."
          value={selectedClass}
          //   onFocus={() => setIsFocus(true)}
          //   onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setSelectedClass(item.value);
            // setIsFocus(false);
          }}
        />
      </View>
      <TextInput
        style={styles.input}
        value={enteredFromZipcode}
        onChangeText={setEnteredFromZipcode}
        keyboardType="numeric" // Specify numeric keyboard
        placeholder="Enter zipcode origination: "
      />
      <TextInput
        style={styles.input}
        value={enteredToZipcode}
        onChangeText={setEnteredToZipcode}
        keyboardType="numeric" // Specify numeric keyboard
        placeholder="Enter zipcode destination: "
      />
      <View style={styles.buttonContainer}>
        <Button
          //   backgroundColor="green"
          title="Generate Estimate"
          onPress={() => navigation.navigate("Estimate")}
        />
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

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
    bottom: 40, // 20 units from the bottom
    width: "100%",
    padding: 40,
  },
});

export default InitialSetup;
