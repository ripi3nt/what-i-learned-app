import React, { useState } from "react";
import { View, Text, Pressable, Image, FlatList, Modal} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../globalStyles";
import style from "./style";
import Post, {PostProps} from "./Post";
import BottomBar from "../../components/BottomBar";
import Filters from "../../components/Filters";


const DATA: PostProps[]=[
{
  id: "1",
  title: "Lorem",
  username: "username",
  body: "Etiam risus magna, molestie ut turpis a, pellentesque mattis sem. Integer id egestas lacus. Fusce congue diam dolor, vel mollis nibh elementum sed. Etiam imperdiet felis id urna efficitur imperdiet. Curabitur vel rhoncus sem. Aliquam erat volutpat. Aenean viverra magna in risus commodo pretium."
},
{
  id: "2",
  title: "Lorem",
  username: "username",
  body: "Etiam risus magna, molestie ut turpis a, pellentesque mattis sem. Integer id egestas lacus. Fusce congue diam dolor, vel mollis nibh elementum sed. Etiam imperdiet felis id urna efficitur imperdiet. Curabitur vel rhoncus sem. Aliquam erat volutpat. Aenean viverra magna in risus commodo pretium."
},
{
  id: "3",
  title: "Lorem",
  username: "username",
  body: "Etiam risus magna, molestie ut turpis a, pellentesque mattis sem. Integer id egestas lacus. Fusce congue diam dolor, vel mollis nibh elementum sed. Etiam imperdiet felis id urna efficitur imperdiet. Curabitur vel rhoncus sem. Aliquam erat volutpat. Aenean viverra magna in risus commodo pretium."
},
{
  id: "4",
  title: "Lorem",
  username: "username",
  body: "Etiam risus magna, molestie ut turpis a, pellentesque mattis sem. Integer id egestas lacus. Fusce congue diam dolor, vel mollis nibh elementum sed. Etiam imperdiet felis id urna efficitur imperdiet. Curabitur vel rhoncus sem. Aliquam erat volutpat. Aenean viverra magna in risus commodo pretium."
},


]

const Home: React.FC = () => {
  //TODO Fill the filter menu
  //TODO fetch posts from API
  //TODO pull down -> refresh
  
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleFilters = ()=>{
    setFiltersVisible(!filtersVisible);
  }

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={[globalStyles.header_container, {paddingHorizontal: 43}]}>
          <Filters isVisible={filtersVisible} toggleVisible={toggleFilters}></Filters>
          <Text style={style.title}>Feed</Text>
          <Pressable onPress={toggleFilters}>
            <Image style={globalStyles.imageButton} source={require("../../assets/filter.png")}></Image>
          </Pressable>
        </View>
        <FlatList style={{paddingHorizontal: 43}} data={DATA} renderItem={({item})=>(<Post title={item.title} body={item.body} username={item.username} id={item.id}></Post>)}/>
        <BottomBar></BottomBar>
      </View>
    </SafeAreaView>
  )
}

export default Home;
