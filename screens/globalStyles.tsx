import { StyleSheet } from "react-native";

const globalStyles= StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "100%",
      height: "100%",
    },
    contentContainer: {
      paddingHorizontal: 43
    },
    errorText: {
      color: "red"
    },
    header_container: {
      flexDirection: "row",
      justifyContent: "space-between", 
      width: "100%", 
      alignItems: "center",
      borderBottomColor: "black",
      borderBottomWidth: 2,
      paddingBottom: 15,
      paddingHorizontal: 43
    },
  imageButton: {
    width: 34,
    height: 34,
    resizeMode: "cover"
    }


  })

export default globalStyles;
