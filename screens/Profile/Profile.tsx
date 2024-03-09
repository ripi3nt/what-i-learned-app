import { View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import globalStyles from "../globalStyles";
import Post, { PostProps } from "../Home/Post";
import { FlatList } from "react-native";
import style from "./style";
import Tag from "../../components/Tag";

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

const Profile: React.FC = () => {
  //TODO fetch user post and most common tags

  return (
    <SafeAreaView>
      <View style={[globalStyles.container, {justifyContent: "flex-start", gap: 30}]}>
        <Header title="Profile"></Header>
        <View style={{width: "100%"}}>
          <Text style={style.username}>Username</Text>
          <View style={{flexDirection: "row", gap: 20}}>
            <Tag text="stoicism"></Tag>
            <Tag text="gym"></Tag>
            <Tag text="school"></Tag>
          </View>
        </View>
        <FlatList data={DATA} renderItem={({item})=>(<Post title={item.title} body={item.body} username={item.username} id={item.id}></Post>)}/>

        
        
      </View>
    </SafeAreaView>
  )
}

export default Profile;
