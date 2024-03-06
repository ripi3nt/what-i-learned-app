import { TextInput, View, Text } from "react-native"
import Header from "../../components/Header";
import ButtonSmall from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../globalStyles";
import { postStyle } from "../Home/style";
import { CommonActions, useNavigation } from "@react-navigation/native";

const EditPost: React.FC = () => {

  const navigation = useNavigation();

  const onDone = () => {
    //TODO update post with API

    navigation.dispatch(CommonActions.navigate({ name: "Home" }))

  }

  return (
    <SafeAreaView>
      <View style={[globalStyles.container, { justifyContent: "flex-start", alignItems: "flex-start", gap: 30 }]}>
        <Header title="Edit post"></Header>
        <View style={{ padding: 30, borderColor: "black", borderWidth: 2, borderRadius: 30, width: "100%" }}>
          <TextInput style={postStyle.title}>Lorem Ipsum</TextInput>
          <Text style={postStyle.username}>@username</Text>
          <TextInput multiline={true} >Etiam risus magna, molestie ut turpis a, pellentesque mattis sem. Integer id egestas lacus. Fusce congue diam dolor, vel mollis nibh elementum sed. Etiam imperdiet felis id urna efficitur imperdiet. Curabitur vel rhoncus sem. Aliquam erat volutpat. Aenean viverra magna in risus commodo pretium. </TextInput>
        </View>
        <ButtonSmall text="Done" fill={true} onPress={onDone}></ButtonSmall>
      </View>
    </SafeAreaView>
  )
}

export default EditPost;
