import React, { useContext, useEffect, useState } from "react";
import { View, Text, Pressable, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../globalStyles";
import style from "./style";
import Post, { PostProps } from "./Post";
import BottomBar from "../../components/BottomBar";
import Filters from "../../components/Filters";
import AppContext from "../../global/globalContext";
import apiurl from "../../constants/api";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { HomeProps } from "../../global/types";
import { useIsFocused } from "@react-navigation/native";
import LikesCache from "../../global/likesCache";

const Home: React.FC<HomeProps> = ({ route, navigation }: HomeProps) => {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const [posts, setPosts] = useState<PostProps[] | null>(null);

  const ctx = useContext(AppContext);
  
  const cachedLikes = useContext(LikesCache);

  const isFocused = useIsFocused();

  const addLikeToCache = (postid: number) => {
    cachedLikes.setCache([...cachedLikes.cache, postid])
    console.log(cachedLikes);
  };

  const postLikesToDB = () => {
    fetch(apiurl + "/addLikes", {
      method: "POST",
      headers: { Bearer: ctx.token, "Content-Type": "application/json" },
      body: JSON.stringify({ username: ctx.username, likedPosts: cachedLikes.cache }),
    });
  };

  const fetchPosts = () => {
    fetch(apiurl + "/posts", { method: "GET", headers: { Bearer: ctx.token } })
      .then(
        (res) => {
          if (res.status == 200) return res.json();
          else return [];
        },
        (err) => {
          console.log(err);
        }
      )
      .then((data) => {
        setPosts(data);
      });
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  useEffect(() => {
    if (isFocused) fetchPosts();
    else {
      if (cachedLikes.cache.length != 0) {
        postLikesToDB();
        cachedLikes.setCache([]);
      }
    }
  }, [isFocused]);

  if (posts == null) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View
          style={[globalStyles.header_container, { paddingHorizontal: 43 }]}
        >
          <Filters
            isVisible={filtersVisible}
            toggleVisible={toggleFilters}
          ></Filters>
          <Text style={style.title}>Feed</Text>
          <Pressable onPress={toggleFilters}>
            <Image
              style={globalStyles.imageButton}
              source={require("../../assets/filter.png")}
            ></Image>
          </Pressable>
        </View>
        <FlatList
          style={{ paddingHorizontal: 43, width: "100%" }}
          data={posts}
          refreshing={false}
          onRefresh={() => {
            fetchPosts();
          }}
          renderItem={({ item }) => (
            <Post
              title={item.title}
              body={item.body}
              username={item.username}
              id={item.id}
              likes={item.likes}
              navigation={navigation}
              likePost={addLikeToCache}
            ></Post>
          )}
        />
        <BottomBar></BottomBar>
      </View>
    </SafeAreaView>
  );
};

export default Home;
