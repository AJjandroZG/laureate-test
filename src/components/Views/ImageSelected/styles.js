import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll:{
    height: '100%',
    width: '100%'
  },
  image: {
    height: 400,
    width: 400,
    borderRadius: 15,
  },
  text:{
      fontWeight: "bold",
      fontSize: 15
  }
});

export default styles;
