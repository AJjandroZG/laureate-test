import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Icons} from '../../../commons/const';
import {THEME} from '../../../commons/styles';
import {Button} from '../../Atoms';
import styles from './styles';

const ImageSelected = ({route, navigation}) => {
  const {image} = route.params;

  return (
    <ScrollView justifyContent="center" style={styles.scroll}>
      <View style={styles.root}>
        <Image source={{uri: image.path}} style={styles.image} />
          <Button
            title="Siguinte"
            event={() => navigation.navigate('Response', {
                image,
              })}
            iconRigth
            width="50%"
            borderRadius={10}
            labelStyles={styles.text}
            textColor={THEME.whiteColor}
            iconName={Icons.chevronForward}
            background={THEME.primary}
          />
      </View>
    </ScrollView>
  );
};

export default ImageSelected;
