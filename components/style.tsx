import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  input: {
    backgroundColor: "#FAF9F6",
    width: 307,
    height: 43,
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 1,
    color: "#000",
    paddingHorizontal: 15,
    marginTop: 10,
    fontFamily: "Poppins_400Regular"
  },
  button: {
    backgroundColor: "#012622",
    height: 43,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  buttonEmpty: {
    borderColor: "#012622",
    borderWidth: 1,
    height: 43,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  tag: {
    fontFamily: "Poppins_400Regular",
    color: "#8D8D8D",
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

})

export default style;
