import React from "react";
import {ImageBackground, View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./style";
import Input from "./components/Input";
import ButtonSmall from "./components/Button";

const Login: React.FC = () => {

  return (
    <SafeAreaView style={{backgroundColor: "#F2EFEB"}}>
      <ImageBackground source={require('../../assets/paper-bg.jpg')} resizeMode="cover" style={{ height: "100%", width: "100%"}}>
      <View style={styles.container}>
        <Text style={styles.title}>NWSY</Text>
        <View style={{gap: 18, alignContent: "center"}}>
          <Input name="Username"></Input>
          <Input name="Passsword" secure={true}></Input>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <ButtonSmall text="SignUp" fill={false} ></ButtonSmall>
            <ButtonSmall text="Login" fill={true} ></ButtonSmall>
          </View>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Login;
