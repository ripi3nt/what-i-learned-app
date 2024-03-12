import { StyleSheet } from "react-native";
import colors from "../colors";

const style = StyleSheet.create({
    title: {
      fontSize: 48,
      fontFamily: "PlayfairDisplay_500Medium"
    },
    container: {
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      height: "100%",
    }

  })

export const postStyle = StyleSheet.create({
    title: {
      fontSize: 32,
      fontFamily: "PlayfairDisplay_500Medium",
    },
    username: {
      fontSize: 16,
      color: colors.gray,
      fontFamily: "Poppins_400Regular"
    }
  })

export default style;
