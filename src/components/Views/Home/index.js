import React, {useState, useEffect} from 'react';
import {Upload} from '../../Molecules';

const Home = ({navigation}) => {
  const [clear, setclear] = useState(false);

  useEffect(() => {
    if (clear) {
      setclear(false);
    }
  }, [clear])

  return (
    <Upload
      clear={clear}
      onChange={image =>{
        navigation.navigate('ImageSelected', {
          image,
        })
        setclear(true);
      }}
    />
  );
};

export default Home;
