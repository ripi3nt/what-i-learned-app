import { TextInput, View, Text } from "react-native";
import Header from "../../components/Header";
import ButtonSmall from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../globalStyles";
import { postStyle } from "../Home/style";
import { EditPostProps } from "../../global/types";
import apiurl from "../../constants/api";
import { useContext, useState } from "react";
import AppContext from "../../global/globalContext";

const EditPost: React.FC<EditPostProps> = ({
  route,
  navigation,
}: EditPostProps) => {
  const ctx = useContext(AppContext);
  const [error, setError] = useState("");
  const [title, setTitle] = useState(route.params.title);
  const [body, setBody] = useState(route.params.body);


  const onDone = () => {
    //TODO update post with API
    fetch(apiurl + "/editPost", {
      method: "POST",
      headers: { "Bearer": ctx.token , "Content-type": "application/json"},
      body: JSON.stringify({
        title: title,
        body: body,
        id: route.params.id,
      }),
    }).then((res) => {
      if (res.status == 401) setError("Network error");
      else navigation.navigate("Home");
    });
  };

  return (
    <SafeAreaView>
      <View
        style={[
          globalStyles.container,
          { justifyContent: "flex-start", alignItems: "flex-start", gap: 30 },
        ]}
      >
        <Header title="Edit post"></Header>
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
            <TextInput style={postStyle.title} value={title} onChangeText={(text) => {
              setTitle(text);
            }}></TextInput>
            <Text style={postStyle.username}>@{route.params.username}</Text>
            <TextInput multiline={true} value={body} onChangeText={(text) => {
              setBody(text);
            }}></TextInput>
          </View>
          <ButtonSmall text="Done" fill={true} onPress={onDone}></ButtonSmall>
          <Text>{error}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditPost;
