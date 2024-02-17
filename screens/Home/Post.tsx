import { View, Text } from "react-native"
import { postStyle } from "./style"

export interface PostProps {
  id: string
  title: string
  username: string
  body: string
}

const Post: React.FC<PostProps> = (props: PostProps)=> {

  //TODO Styling

  return(
    <View style={{gap: 4}}>
      <Text style={postStyle.title}>{props.title}</Text>
      <Text style={postStyle.username}>@{props.username}</Text>
      <Text>{props.body}</Text>
    </View>
  )
}

export default Post;
