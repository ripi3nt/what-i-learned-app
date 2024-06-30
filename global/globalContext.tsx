import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserInfo {
  token: string;
  username: string;
}

export const storeInLocalStorage = async (username: string, token: string) => {
  try {
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("token", token);
  } catch (e) {
    console.log(e);
  }
};

export const getLoginFromLocalStorage = () => {
  try {
    let username = null;
    AsyncStorage.getItem("username").then((res) => {
      if (res) {
        username = res;
      }
    });
    let token = null;
    AsyncStorage.getItem("token",(res) => {
      if (res) {
        token = res;
      }
    } );
    if (username == null || token == null) {
      return { username: "", token: "" };
    }
    return { username: username, token: token };
  } catch (e) {
    return { username: "", token: "" };
  }
};

const AppContext = createContext<UserInfo>({ username: "", token: ""});

export default AppContext;
