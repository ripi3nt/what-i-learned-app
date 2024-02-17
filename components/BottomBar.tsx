import { Pressable, View, Image } from "react-native"
import style from "./style";

const BottomBar: React.FC = ()=> {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between" , width: "100%", height: 98, borderTopColor: "black", borderTopWidth: 2, paddingTop: 30}}>
      <Pressable>
        <Image style={style.imageButton} source={require("../assets/newspaper.png")}></Image>
      </Pressable>
      <Pressable>
        <Image style={style.imageButton} source={require("../assets/newspaper.png")}></Image>
      </Pressable>
      <Pressable >
        <Image style={style.imageButton} source={require("../assets/icon.png")}></Image>
      </Pressable>
    </View>
  )
}

export default BottomBar;
