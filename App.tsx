import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PlayfairDisplay_600SemiBold, useFonts } from "@expo-google-fonts/playfair-display";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {

  const [fontsLoaded] = useFonts({
      PlayfairDisplay_600SemiBold
    });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )  
}

export default App;
