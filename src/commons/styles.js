import {StyleSheet} from 'react-native';


export const stylesHeather = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

});

export const THEME = {
    generalCategories: {
      yellow: "#FDB727",
      purple: "#7E6BAF",
      geen: "#7FC143",
      orange: "#F58343",
      red: "#CF3339",
      restrictedWhite: ["#FDB727", "#FFFFFF"],
    },
    primary: "#FFB500",
    secondary: "#E7CBA2",
    whiteColor: "#FFFFFF",
    lightBlue: "#B8DEE6",
    blackColor: "#000",
    existColor: "#5DAA42",
    redColor: "#FF4000",
    orangeColor: "#FFBF00",
    purpleColor: "#8258FA",
    greenColor: "#1EB600",
    borderColor: "#DDD",
    backgroundAllViews: "#FFFFFF",
    colorLine: "#F3F2F1",
    grayColor: "#606060",
    lightGray: "#EEEEEE",
    unSelected: "#B5B5B5",
    selectedColor: "rgba(186,186,186,0.3)",
    text: {
      defaultColor: "#606060",
      whiteColor: "#FFF",
      primaryColor: "",
      secondaryColor: "",
      titleColor: "",
      success: "#67C37F",
      danger: "#CF5B40",
      disbled: "#CCC",
      regular: "Poppins-Regular",
      bold: "Poppins-Bold",
      thin: "Poppins-Thin",
      italic: "Poppins-Italic",
    },
    input: {
      borderWidth: 0,
      fontSize: 14,
      color: "gray",
      fontWeight: "600",
      borderRadius: 10,
      marginVertical: 12,
      padding: 5,
      marginHorizontal: 10,
      borderColor: "#C0C0C0",
    },
    spinner: {
      textColor: "#FFF",
      progressBarColor: "#FFF",
    },
    shoppingCartButton: {
      badgeColor: "#0097a7",
      badgeLabel: "#FFF",
    },
    drawer: {
      background: "#0097a7",
      width: 165,
      height: 125,
    },
    views: {
      home: {
        background: "#F3F3F5",
      },
    },
    categoriesTabs: {
      background: "#0097a7",
      tabSelected: "#11293d",
      textColorTab: "#FFF",
    },
  };