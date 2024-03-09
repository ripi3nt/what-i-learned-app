import { View, Text, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../globalStyles";
import Header from "../../components/Header";
import ButtonSmall from "../../components/Button";
import { postStyle } from "../Home/style";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";

const NewPost: React.FC = ()=> {
  const navigation = useNavigation();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onDone = ()=> {
    //TODO API call to upload post
    navigation.dispatch(CommonActions.navigate({name: "Home"}))
  }

  return (
    <SafeAreaView>
      <View style={[globalStyles.container, { justifyContent: "flex-start", alignItems: "flex-start", gap: 30 }]}>
        <Header title="New Post"></Header>
        <View style={{ padding: 30, borderColor: "black", borderWidth: 2, borderRadius: 30, width: "100%" }}>
          <TextInput value={title}  style={postStyle.title} placeholder="Title"></TextInput>
          <Text style={postStyle.username}>@username</Text>
          <TextInput style={{minHeight: "20%"}} textAlignVertical={"top"} multiline={true} placeholder="Write your story here..."></TextInput>
        </View>
        <ButtonSmall text="Done" fill={true} onPress={onDone}></ButtonSmall>
      

      </View>
    </SafeAreaView>
  )
}

export default NewPost;
