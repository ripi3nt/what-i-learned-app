import { View, Text, Pressable } from "react-native";
import { postStyle } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../global/types";
import { useContext, useState } from "react";
import AppContext from "../../global/globalContext";

export interface PostProps {
  id: number;
  title: string;
  username: string;
  body: string;
  likes: number
  likePost: (postid: number)=>void
  navigation: NativeStackNavigationProp<RootStackParamList, "Home"| "Profile", undefined>
}

const Post: React.FC<PostProps> = (props: PostProps) => {
  //TODO likes and comments

  const [liked, setLiked] = useState(props.likes);

  const toggleLiked = () => {
    if(liked == props.likes) {
      setLiked(liked+1)
      props.likePost(props.id);
    }
    else
      setLiked(liked-1)

    // add/remove like in DB
  }
  
  const ctx = useContext(AppContext);
  const goProfile = () => {
    props.navigation.navigate("Profile", { username: props.username });
  }

  const editPost = () => {
    if(ctx.username == props.username) {
      props.navigation.navigate("EditPost", { id: props.id, title: props.title, body: props.body, username: props.username})
    }
  }

  return (
    <Pressable
      onLongPress={editPost}>
      <View style={{ gap: 4 }}>
        <Text style={postStyle.title}>{props.title}</Text>
        <Pressable onPress={goProfile}>
          <Text style={postStyle.username}>@{props.username}</Text>
        </Pressable>
        <Text style={{ fontFamily: "Poppins_400Regular" }}>{props.body}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
        <Text>1.1.2024</Text>
        <Pressable onPress={toggleLiked}>
        <Text>{liked}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Post;
