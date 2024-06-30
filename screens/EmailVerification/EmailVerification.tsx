import { ImageBackground, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import ButtonSmall from "../../components/Button";
import { useContext, useState } from "react";
import globalStyles from "../globalStyles";
import style from "./stlyes";
import AppContext, { storeInLocalStorage } from "../../global/globalContext";
import apiurl from "../../constants/api";
import { EmailVerificationProps } from "../../global/types";

interface ResponseBody {
  username: string
  token: string
}

const EmailVerificaition: React.FC<EmailVerificationProps> = ({
  route,
  navigation,
}: EmailVerificationProps) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const ctx = useContext(AppContext);

  const onDone = () => {
    if (!code) {
      setError("Please enter the code we sent to your e-mail address");
    } else {
      fetch(apiurl + "/verifyEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: route.params.username, token: code }),
      })
        .then(
          (res) => {
            if (res.status == 200) return res.json();
            else {
              setError("Invalid code, please try again");
            }
          },
          (err) => {
            console.log(err);
          }
        )
        .then((data: ResponseBody) => {
          ctx.token = data.token;
          ctx.username = data.username;
          storeInLocalStorage(data.username, data.token);
          navigation.navigate("Home");
        });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F2EFEB" }}>
      <ImageBackground
        source={require("../../assets/paper-bg.jpg")}
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
      >
        <View style={style.centeredContainer}>
          <Text style={style.title}>Confirm E-Mail</Text>
          <Text style={{ textAlign: "center" }}>
            Check your inbox for an e-mail from us containing the code needed to
            complete the sign-up.
          </Text>
          <Input name="Enter code" value={code} setValue={setCode}></Input>
          <Text style={globalStyles.errorText}>{error}</Text>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <ButtonSmall text="Done" fill={true} onPress={onDone}></ButtonSmall>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EmailVerificaition;
