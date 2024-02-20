import { Pressable, View, Image } from "react-native"
import style from "./style";
import { CommonActions, useNavigation } from "@react-navigation/native";

const BottomBar: React.FC = ()=> {

  const navigation = useNavigation();

  return (
    <View style={{flexDirection: "row", justifyContent: "space-between" , width: "100%", height: 98, borderTopColor: "black", borderTopWidth: 2, paddingTop: 30}}>
      <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate({name: "Home"}))}>
        <Image style={style.imageButton} source={require("../assets/newspaper.png")}></Image>
      </Pressable>
      <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate({name: "CreatePost"}))}>
        <Image style={style.imageButton} source={require("../assets/newspaper.png")}></Image>
      </Pressable>
      <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate({name: "Profile"}))}>
        <Image style={style.imageButton} source={require("../assets/icon.png")}></Image>
      </Pressable>
    </View>
  )
}

export default BottomBar;
