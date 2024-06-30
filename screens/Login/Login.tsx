import React, { useContext, useState } from "react";
import { ImageBackground, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import globalStyles from "../globalStyles";
import Input from "../../components/Input";
import ButtonSmall from "../../components/Button";
import { CommonActions, useNavigation } from "@react-navigation/native";
import colors from "../colors";
import apiurl from "../../constants/api";
import { LoginProps } from "../../global/types";
import AppContext from "../../global/globalContext";

interface AuthResponse {
  token: string;
  username: string;
}

const Login: React.FC<LoginProps> = ({ route, navigation }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ctx = useContext(AppContext);

  const onLoginPress = () => {
    if (username.length == 0 || password.length == 0) {
      setError("Please fill in all the fields");
    } else {
      fetch(apiurl + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then(
          (res) => {
            if (res.status == 200) return res.json();
            else if(res.status == 404) {
              setError("Server error, please try again later");
            }
          },
          (err) => {
            console.log(err);
            setError("Network error");
          }
        )
        .then(
          (data: AuthResponse) => {
            ctx.username = data.username;
            ctx.token = data.token;
            navigation.navigate("Home");
          },
          (err) => {
            console.log(err);
          }
        );
    }
  };

  const onSignupPress = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Signup",
      })
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.bg }}>
      <ImageBackground
        source={require("../../assets/paper-bg.jpg")}
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
      >
        <View style={globalStyles.container}>
          <Text style={styles.title}>NWSY</Text>
          <View style={{ gap: 18, alignContent: "center" }}>
            <Input
              name="Username"
              value={username}
              setValue={setUsername}
            ></Input>
            <Input
              name="Passsword"
              secure={true}
              value={password}
              setValue={setPassword}
            ></Input>
            <Text style={globalStyles.errorText}>{error}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ButtonSmall
                text="SignUp"
                fill={false}
                onPress={onSignupPress}
              ></ButtonSmall>
              <ButtonSmall
                text="Login"
                fill={true}
                onPress={onLoginPress}
              ></ButtonSmall>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
