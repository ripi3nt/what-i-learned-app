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
  imageButton: {
    width: 34,
    height: 34,
    resizeMode: "cover"
    }

})

export default style;
