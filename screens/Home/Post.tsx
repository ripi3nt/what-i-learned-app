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

  //TODO click on username -> profile of user
  //TODO likes and comments
  const navigation = useNavigation();

  return(
    <Pressable onLongPress={()=>navigation.dispatch(CommonActions.navigate({name: "EditPost"}))}>
      <View style={{gap: 4}}>
        <Text style={postStyle.title}>{props.title}</Text>
        <Text style={postStyle.username}>@{props.username}</Text>
        <Text style={{fontFamily: "Poppins_400Regular"}}>{props.body}</Text>
      </View>
    </Pressable>
  )
}

export default Post;
