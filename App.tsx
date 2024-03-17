import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PlayfairDisplay_600SemiBold, PlayfairDisplay_500Medium } from "@expo-google-fonts/playfair-display";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import Signup from "./screens/Signup/Signup";
import EmailVerificaition from "./screens/EmailVerification/EmailVerification";
import Profile from "./screens/Profile/Profile";
import NewPost from "./screens/NewPost/NewPost";
import EditPost from "./screens/EditPost/EditPost";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {

  const [fontsLoaded] = useFonts({
      PlayfairDisplay_600SemiBold,
      PlayfairDisplay_500Medium,
      Poppins_400Regular
    });

  if(!fontsLoaded) {
    return (
      <>
        <ActivityIndicator></ActivityIndicator>
      </>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="EmailVerification" component={EmailVerificaition} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CreatePost" component={NewPost} />
        <Stack.Screen name="EditPost" component={EditPost} />
      </Stack.Navigator>
    </NavigationContainer>
  )  
}

export default App;
