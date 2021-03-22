import {uploadImage, getBase64} from './helpers';
import base64 from 'react-native-base64';

const endPoint = {
  server: 'https://api.imagga.com/v2/tags',
  // server:'https://api.imagga.com/v2/tags?image_url=https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg',
  username: 'acc_fb71796a0f72ee5',
  password: '4ce68bc96bf4abd5dbd0a61232f4d984',
};

export const sendImage = async image => {
  let headers = new Headers();
  headers.set(
    'Authorization',
    'Basic ' + base64.encode(endPoint.username + ':' + endPoint.password),
  );
  let img = await uploadImage(image.path);
  let encode = await getBase64(img);
  var formData = new FormData();
  formData.append('image_base64', encode);
  let request = {
    method: 'POST',
    headers,
    body: formData,
  };
  try {
    const response = await fetch(endPoint.server, request);
    return await response.json();
  } catch (error) {
    return error;
  }
};
