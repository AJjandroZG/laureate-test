import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../../commons/styles";

const styles = StyleSheet.create({
  root: {},
  centerItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  col1: {
    flexDirection: "row",
    flex: 1,
  },
  col2: {
    width: 70,
  },
  title: { textAlign: "center", fontFamily: THEME.text.bold },
  icon: {
    width: 33,
    height: 30,
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME.borderColor,
    paddingHorizontal: 10,
  },
  textDatePicker: {
    marginLeft: 15,
    color: THEME.grayColor,
    fontFamily: THEME.text.regular,
  },
  tabBarStyle: {
    height: 60,
    paddingVertical: 8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 4,
        borderTopWidth: 0,
      },
    }),
  },
});

export default styles;
