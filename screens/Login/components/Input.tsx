import React from "react";
import { Text, TextInput, View } from "react-native";
import style from "./style";

interface Props {
  name: string
  secure?: boolean
}

const Input:React.FC<Props> = (props: Props) => {
  return(
    <View>
        <Text>{props.name}</Text>
        <TextInput style={style.input} selectionColor={'black'} secureTextEntry={props.secure == undefined? false : props.secure}></TextInput>
    </View>
  )
}

export default Input;
