import { StyleSheet } from "react-native";
import colors from "../screens/colors";

const style = StyleSheet.create({
  input: {
    backgroundColor: colors.bg,
    width: 307,
    height: 43,
    borderRadius: 8,
    borderColor: colors.fg,
    borderWidth: 1,
    color: colors.fg,
    paddingHorizontal: 15,
    marginTop: 10,
    fontFamily: "Poppins_400Regular"
  },
  button: {
    backgroundColor: colors.accent,
    height: 43,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  buttonEmpty: {
    borderColor: colors.accent,
    borderWidth: 1,
    height: 43,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  tag: {
    fontFamily: "Poppins_400Regular",
    color: colors.gray,
    fontSize: 16
  },
  filtersContainer: {
    height: "60%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    elevation: 30,
    padding: 30,
    justifyContent: "flex-start",
    gap: 15
    },
  bottomBar: {
    paddingHorizontal: 43,
    flexDirection: "row",
    justifyContent: "space-between",
    width:"100%", 
    height: 98,
    borderTopColor:"black",
    borderTopWidth:2, 
    paddingTop: 30
  }

})

export default style;
