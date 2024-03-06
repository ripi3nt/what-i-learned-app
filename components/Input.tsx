import React, { Dispatch } from "react";
import { Text, TextInput, View } from "react-native";
import style from "./style";

interface Props {
  name: string
  secure?: boolean
  value: string
  setValue: Dispatch<React.SetStateAction<string>>
}

const Input:React.FC<Props> = (props: Props) => {
  return(
    <View>
        <Text style={{fontFamily: "Poppins_400Regular"}}>{props.name}</Text>
        <TextInput style={style.input} selectionColor={'black'} secureTextEntry={props.secure == undefined? false : props.secure} onChangeText={props.setValue}></TextInput>
    </View>
  )
}

export default Input;
