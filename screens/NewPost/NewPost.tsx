import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../globalStyles";
import Header from "../../components/Header";
import ButtonSmall from "../../components/Button";
import { postStyle } from "../Home/style";
import { useContext, useState } from "react";
import apiurl from "../../constants/api";
import { CreatePostProps } from "../../global/types";
import AppContext from "../../global/globalContext";

const NewPost: React.FC<CreatePostProps> = ({route, navigation}: CreatePostProps) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const ctx = useContext(AppContext);

  const onDone = () => {
    //TODO notify user if the post was succesfully posted
    fetch(apiurl + "/addPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: ctx.username, title: title, body: body }),
    })
    .then(res => {
      if(res.status == 401) {
        setError("Network error, please try again")
      } else {
        navigation.navigate("Home");
      }
      })
  };

  return (
    <SafeAreaView>
      <View
        style={[
          globalStyles.container,
          { justifyContent: "flex-start", alignItems: "flex-start", gap: 30 },
        ]}
      >
        <Header title="New Post"></Header>
        <View
          style={{
            paddingHorizontal: 43,
            gap: 30,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <View
            style={{
              padding: 30,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 30,
              width: "100%",
            }}
          >
            <TextInput
              value={title}
              style={postStyle.title}
              placeholder="Title"
              onChangeText={(text) => {
                setTitle(text);
              }}
            ></TextInput>
            <Text style={postStyle.username}>@{ctx.username}</Text>
            <TextInput
              style={{ minHeight: "20%" }}
              textAlignVertical={"top"}
              multiline={true}
              placeholder="Write your story here..."
              onChangeText={(text) => {
                setBody(text);
              }}
            ></TextInput>
          </View>
          <ButtonSmall text="Done" fill={true} onPress={onDone}></ButtonSmall>
          <Text>{error}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPost;
