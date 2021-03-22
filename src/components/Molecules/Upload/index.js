import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from '../../Atoms';
import {Icons} from '../../../commons/const';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';

const Upload = ({onChange, clear}) => {
  const [img, setimg] = useState(null);

  useEffect(() => {
    if (clear) {
      setimg(null);
    }
  }, [clear])

  const UploadImage = option => {
    switch (option) {
      case 'camera':
        ImagePicker.openCamera({
          cropping: false,
        })
          .then(image => {
            setimg({
              uri: image.path,
            });
            onChange(image);
          })
          .catch(() => {});
        break;
      case 'gallery':
        ImagePicker.openPicker({
          cropping: false,
        })
          .then(image => {
            setimg({
              uri: image.path,
            });
            onChange(image);
          })
          .catch(() => {});
        break;
      default:
        break;
    }
  };

  const Images = () => <Image source={img} style={styles.image} />;

  return (
    <View style={styles.root}>
      {img ? (
        <Images />
      ) : (
        <>
          <TouchableOpacity onPress={() => UploadImage('camera')}>
            <View style={styles.bottonPrimary}>
              <Icon name={Icons.camera} size={100} />
              <Text>Cámara</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => UploadImage('gallery')}>
            <View style={styles.bottonPrimary}>
              <Icon name={Icons.gallery} size={100} />
              <Text>Galería</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Upload;
