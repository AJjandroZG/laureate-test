import { StyleSheet } from "react-native";
import { THEME } from "../../../commons/styles";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  showImage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  image: { height: 200, width: 200, borderRadius: 15 },
  removeImage: { marginTop: 20 },
  nameImage: { width: 110 },
  icon: {
    height: 100,
    width: 100,
  },
  text: { textAlign: "center", padding: 5 },
  bottonPrimary: {
    height: 150,
    width: 250,
    backgroundColor: THEME.primary,
    alignItems: "center",
    borderRadius: 20,
    padding: 15,
  },
});

export default styles;
