import { Modal, Pressable, View, Text} from 'react-native'
import style from './style';
import Input from './Input';
import ButtonSmall from './Button';
import { useState } from 'react';
import Tag from './Tag';
import SwipeDownView from '../components/SwipeDownContainer';

interface FiltersProps {
  isVisible: boolean;
  toggleVisible: ()=>void;
}

const Filters: React.FC<FiltersProps> = (props: FiltersProps)=>{
  const [username, setUsername] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([""]);


  const addTag = () => {
    setTag("");
    setTags([...tags, tag]);
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag==tagToRemove));
  }

  return (
      <Modal animationType="slide" visible={props.isVisible} onRequestClose={props.toggleVisible} transparent={true}>
        <SwipeDownView onSwipeDown={props.toggleVisible}>
        <Pressable style={{height: "40%"}} onPress={props.toggleVisible}></Pressable>
        <View style={style.filtersContainer}>
          <Text style={{fontFamily: "PlayfairDisplay_500Medium", fontSize: 24 }}>Filters</Text>
          <Input name="Username" value={username} setValue={setUsername}></Input>
          <Input name="Tags" value={tag} setValue={setTag}></Input>
          <View style={{flexDirection: "row", gap: 15}}>
            {tags.map((tag) => {
              if(tag != "") return ( <Pressable onPress={()=>{removeTag(tag)}}><Tag text={tag}></Tag></Pressable>)
              })}
          </View>
          <ButtonSmall text='Add' fill={true} onPress={addTag}></ButtonSmall>
        </View>
        </SwipeDownView>
      </Modal>

  )
}

export default Filters;
