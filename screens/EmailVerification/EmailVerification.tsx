import { ImageBackground , View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Input from "../../components/Input";
import ButtonSmall from "../../components/Button";
import { useState } from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import globalStyles from "../globalStyles";
import style from "./stlyes";

const EmailVerificaition: React.FC = ()=> {
  const [code, setCode] = useState("");
  const [ error, setError] = useState("");

  const navigation = useNavigation();
  const onDone = ()=> {
    if(!code) {
      setError("Please enter the code we sent to your e-mail address");
    } else {
      navigation.dispatch(CommonActions.navigate({
          name: "Home"
        }))

    }

  }

  return (
    <SafeAreaView style={{backgroundColor: "#F2EFEB"}}>
      <ImageBackground source={require('../../assets/paper-bg.jpg')} resizeMode="cover" style={{ height: "100%", width: "100%"}}>
        <View style={style.centeredContainer}>
          <Text style={style.title}>Confirm E-Mail</Text>
          <Text style={{ textAlign: "center"}}>Check your inbox for an e-mail from us containing the code needed to complete the sign-up.</Text>
          <Input name="Enter code" value={code} setValue={setCode}></Input>
          <Text style={globalStyles.errorText}>{error}</Text>
          <View style={{width: "100%", alignItems:"flex-end"}}>
            <ButtonSmall text="Done" fill={true} onPress={onDone}></ButtonSmall>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default EmailVerificaition;
