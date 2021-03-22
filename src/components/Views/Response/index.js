import React, {useState, useEffect} from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {Button} from '../../Atoms';
import {sendImage} from '../../../commons/services';
import {Icons} from '../../../commons/const';
import {Spinner} from 'native-base';
import styles from './styles';
import {THEME} from '../../../commons/styles';
import CameraRoll from '@react-native-community/cameraroll';

const Response = ({route, navigation}) => {
  const {image} = route.params;
  const [response, setresponse] = useState('');
  const [isLoading, setisLoading] = useState(true);

  const request = async image => {
    setisLoading(true);
    let res = await sendImage(image);
    setresponse(JSON.stringify(res, null, 2));
    setisLoading(false);
  };

  useEffect(() => {
    request(image);
  }, [image]);

  const save = async () => {
    CameraRoll.save(image.path, {type: 'photo', album: '/laureate'}); // Guarda en carpeta pictures
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={{uri: image.path}} style={styles.image} />
      </View>
      {isLoading ? <Spinner color={THEME.primary} /> : <Text>{response}</Text>}
      <View style={styles.root}>
        <Button
          title="Guardar"
          event={() => {
            save();
            navigation.navigate('Home');
          }}
          iconRigth
          width="50%"
          borderRadius={10}
          labelStyles={styles.text}
          textColor={THEME.whiteColor}
          iconName={Icons.save}
          sizeIcon={25}
          background={THEME.primary}
        />
      </View>
    </ScrollView>
  );
};

export default Response;
