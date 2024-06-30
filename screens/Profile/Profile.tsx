import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import globalStyles from "../globalStyles";
import Post, { PostProps } from "../Home/Post";
import { FlatList } from "react-native";
import style from "./style";
import Tag from "../../components/Tag";
import { ProfileProps } from "../../global/types";
import { useContext, useEffect, useState } from "react";
import apiurl from "../../constants/api";
import AppContext from "../../global/globalContext";
import LikesCache from "../../global/likesCache";

const Profile: React.FC<ProfileProps> = ({
  route,
  navigation,
}: ProfileProps) => {
  //TODO fetch user post and most common tags

  const [posts, setPosts] = useState<PostProps[] | null>(null);
  const [error, setError] = useState("");

  const ctx = useContext(AppContext);

  const cachedLikes = useContext(LikesCache);

  const username = route.params?.username ? route.params?.username : ctx.username;

  const addLikeToCache = (postid: number) => {
      cachedLikes.push(postid)
    };


  const fetchUserPosts = () => {
    fetch(apiurl + "/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Bearer":  ctx.token},
      body: JSON.stringify({ username: username }),
    })
    .then(res => {
      if(res.status == 200) return res.json();
      setError("There was an error while trying to get the user's posts");
      })
    .then(data => {
      setPosts(data);
      });
  };

  useEffect(() => {
    fetchUserPosts();
    }, []);

  return (
    <SafeAreaView>
      <View
        style={[
          globalStyles.container,
          { justifyContent: "flex-start", gap: 30 },
        ]}
      >
        <Header title="Profile"></Header>
        <View style={style.profileInfo}>
          <Text style={style.username}>{username}</Text>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Tag text="stoicism"></Tag>
            <Tag text="gym"></Tag>
            <Tag text="school"></Tag>
          </View>
        </View>
        <FlatList
          data={posts}
          contentContainerStyle={[globalStyles.contentContainer, {padding: 0}]}
          renderItem={({ item }) => (
            <Post
              title={item.title}
              body={item.body}
              username={item.username}
              id={item.id}
              navigation={navigation}
              likes={item.likes}
              likePost={addLikeToCache}
            ></Post>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
