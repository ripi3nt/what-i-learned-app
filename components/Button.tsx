import React from "react";
import { Pressable, Text} from "react-native";
import style from "./style";

interface Props {
  text: string
  fill: boolean
  onPress: () => void
}

const ButtonSmall:React.FC<Props> = (props: Props)=> {

    return(
    <Pressable style={props.fill? style.button : style.buttonEmpty} onPress={props.onPress}>
      <Text style={props.fill ? { color: "#FAF9F6", fontFamily: "Poppins_400Regular", fontSize: 16}: {color: "#000",fontFamily: "Poppins_400Regular", fontSize: 16}}>{props.text}</Text>
    </Pressable>
  )


}

export default ButtonSmall;

