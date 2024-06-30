import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import globalStyles from "../globalStyles";
import Input from "../../components/Input";
import ButtonSmall from "../../components/Button";
import { CommonActions, useNavigation } from "@react-navigation/native";
import apiurl from "../../constants/api";
import { SignupProps } from "../../global/types";

const Signup: React.FC<SignupProps> = ({ route, navigation }: SignupProps) => {
  const [username, setUsername] = useState("");
  const [password, setPaswword] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPaswword2] = useState("");
  const [error, setError] = useState("");

  const onSignupPress = () => {
    //TODO send API req to send mail and generate a token
    if (
      username.length == 0 ||
      password.length == 0 ||
      email.length == 0 ||
      password2.length == 0
    ) {
      setError("Please fill in all the fields");
    } else if (password != password2) {
      setError("Passwords do not match");
    } else {
      fetch(apiurl + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
      }).then(
        (res) => {
          if (res.status == 200)
            navigation.navigate("EmailVerification", { username: username });
          else {
            setError("En error occurred, please try again later");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F2EFEB" }}>
      <ImageBackground
        source={require("../../assets/paper-bg.jpg")}
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
      >
        <View style={globalStyles.container}>
          <View style={{ gap: 10 }}>
            <Text style={styles.title}>Sign-up</Text>
            <Input
              name="Username"
              value={username}
              setValue={setUsername}
            ></Input>
            <Input name="E-Mail" value={email} setValue={setEmail}></Input>
            <Input
              name="Password"
              secure={true}
              value={password}
              setValue={setPaswword}
            ></Input>
            <Input
              name="Retype password"
              secure={true}
              value={password2}
              setValue={setPaswword2}
            ></Input>
            <Text style={globalStyles.errorText}>{error}</Text>
            <View style={{ alignItems: "flex-end" }}>
              <ButtonSmall
                text="Signup"
                fill={true}
                onPress={onSignupPress}
              ></ButtonSmall>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
