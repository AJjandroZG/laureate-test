import {StyleSheet} from 'react-native';
import { THEME } from "../../../commons/styles";

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  text:{
    textAlign: 'center',
    color: THEME.whiteColor
  },
  battery: {
    height: 50,
    width: 100,
    padding: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
  },
  level: {
    backgroundColor: THEME.greenColor,
    height: '100%',
    borderRadius: 4,
    justifyContent: "center"
  },
  positiveBattery: {
    backgroundColor: 'black',
    width: 5,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
  },
});

export default styles;
