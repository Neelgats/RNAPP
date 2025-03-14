import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens
import Home from "./screens/Home";
import loginScreen from "./screens/loginScreen";
//import Landing from "./screens/Landing";
import bmi from "./screens/bmi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen name="loginScreen" component={loginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="bmi" component={bmi} options={{title:"BMI calculator"}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
