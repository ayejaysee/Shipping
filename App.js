import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { fetchFedExToken, callFedExRatesAPI } from './APIs/FedExAPI';
import { fetchUSPSShippingData } from './APIs/UspsAPI';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import HomeScreen from "./components/Preferences";
import EstimateScreen from "./components/Estimate";
const Stack = createNativeStackNavigator();

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setReponse] = useState();
  const parseString = require('react-native-xml2js').parseString;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUSPSShippingData();
        const token = await fetchFedExToken();
        if (token) {
          await callFedExRatesAPI(token);
        }
      } catch (err) {
        console.error('Error in API calls:', err);
        setError(err.message);
      }
    };

    fetchData();
  
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />
    }

    if (error) {
      return <Text>{error}</Text>
    }

    return <Text>USPS API called</Text>;
  };

  return (

    // <View style={styles.container}>
    //   {getContent()}
    //   <StatusBar style="auto" />
    // </View>
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preferences">
        <Stack.Screen name="Preferences" component={HomeScreen} />
        <Stack.Screen name="Estimate" component={EstimateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
