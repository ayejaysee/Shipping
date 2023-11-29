import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

const Preferences = ({ navigation }) => {
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
      <View style={{ marginTop: 40 }}></View>
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
          onChange={(item) => {
            setSelectedUnit(item.value);
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
          onChange={(item) => {
            setSelectedClass(item.value);
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
      <TouchableOpacity
        onPress={() => navigation.navigate("Estimate")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Generate Estimates</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: "30%",
    borderWidth: 2, // Border width
    borderColor: "blue", // Border color
  },
});

export default Preferences;
