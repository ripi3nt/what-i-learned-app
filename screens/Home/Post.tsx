import { View, Text, Pressable } from "react-native"
import { postStyle } from "./style"
import { CommonActions, useNavigation } from "@react-navigation/native"

export interface PostProps {
  id: string
  title: string
  username: string
  body: string
}

const Post: React.FC<PostProps> = (props: PostProps)=> {

  //TODO Styling
  const navigation = useNavigation();

  return(
    <Pressable onLongPress={()=>navigation.dispatch(CommonActions.navigate({name: "EditPost"}))}>
      <View style={{gap: 4}}>
        <Text style={postStyle.title}>{props.title}</Text>
        <Text style={postStyle.username}>@{props.username}</Text>
        <Text>{props.body}</Text>
      </View>
    </Pressable>
  )
}

export default Post;
