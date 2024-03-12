import { Pressable, View, Image } from "react-native"
import { CommonActions, useNavigation } from "@react-navigation/native";
import globalStyles from "../screens/globalStyles";
import style from "./style";

const BottomBar: React.FC = ()=> {

  const navigation = useNavigation();

  return (
    <View style={style.bottomBar}>
      <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate({name: "Home"}))}>
        <Image style={globalStyles.imageButton} source={require("../assets/newspaper.png")}></Image>
      </Pressable>
      <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate({name: "CreatePost"}))}>
        <Image style={globalStyles.imageButton} source={require("../assets/add.png")}></Image>
      </Pressable>
      <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate({name: "Profile"}))}>
        <Image style={globalStyles.imageButton} source={require("../assets/avatar.png")}></Image>
      </Pressable>
    </View>
  )
}

export default BottomBar;
