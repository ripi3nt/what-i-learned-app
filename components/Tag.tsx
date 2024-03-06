import { Text } from "react-native"
import style from "./style";

interface TagProp {
  text: string
}

const Tag: React.FC<TagProp> = (props: TagProp)=> {
  return (
  <>
    <Text style={style.tag}>{props.text}</Text>
  </>
  )
}

export default Tag;
