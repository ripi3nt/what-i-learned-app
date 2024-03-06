import { Image, Pressable, Text, View } from "react-native"
import style from "./style"
import globalStyles from "../screens/globalStyles"
import { useNavigation } from "@react-navigation/native"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps)=> {

  const navigation = useNavigation();

  const onBack = ()=>{
    navigation.goBack();
  }

  return (
    <View style={globalStyles.header_container}>
      <Text style={{fontSize: 48, fontFamily: "PlayfairDisplay_500Medium"}}>{props.title}</Text>
      <Pressable onPress={onBack}>
        <Image style={globalStyles.imageButton} source={require("../assets/back.png")}></Image>
      </Pressable>
    </View>
  )

}

export default Header;
