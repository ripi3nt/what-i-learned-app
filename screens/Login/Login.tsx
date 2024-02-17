import React, { useState } from "react";
import {ImageBackground, View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./style";
import globalStyles from "../globalStyles";
import Input from "../../components/Input";
import ButtonSmall from "../../components/Button";
import { CommonActions, useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const [ username, setUsername] = useState("");
  const [ password, setPassword] = useState("");
  const [ error, setError] = useState("");

  const navigation = useNavigation()

  //TODO Check API if credentials are correct
  const onLoginPress = () => {
    if(username.length == 0 || password.length == 0) {
      setError("Please fill in all the fields");
    } else {
      navigation.dispatch(CommonActions.navigate({
          name: "Home"
        }));
    }
  }

  const onSignupPress = () => {
    navigation.dispatch(CommonActions.navigate({
        name: "Signup"
      }));
  }


  return (
    <SafeAreaView style={{backgroundColor: "#F2EFEB"}}>
      <ImageBackground source={require('../../assets/paper-bg.jpg')} resizeMode="cover" style={{ height: "100%", width: "100%"}}>
      <View style={globalStyles.container}>
        <Text style={styles.title}>NWSY</Text>
        <View style={{gap: 18, alignContent: "center"}}>
          <Input name="Username" value={username} setValue={setUsername}></Input>
          <Input name="Passsword" secure={true} value={password} setValue={setPassword}></Input>
          <Text style={globalStyles.errorText}>{error}</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <ButtonSmall text="SignUp" fill={false} onPress={onSignupPress}></ButtonSmall>
            <ButtonSmall text="Login" fill={true} onPress={onLoginPress}></ButtonSmall>
          </View>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Login;
