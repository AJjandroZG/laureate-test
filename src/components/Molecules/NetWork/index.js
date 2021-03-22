import React, {useState, useEffect} from 'react'
import { View, Text } from "react-native";
import { Icon } from "../../Atoms";
import { Icons } from "../../../commons/const";
import NetInfo from '@react-native-community/netinfo';
import { THEME } from "../../../commons/styles";

const NetWork = () => {
    const [network, setnetwork] = useState({});

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setnetwork({
        type: state.type,
        isConnected: state.isConnected,
      });
    });
  }, []);
    return (
        <View style={{alignItems: "center"}}>
            <Icon name={Icons.wifi} size={50} color={network.isConnected ? THEME.greenColor : THEME.redColor} />
            <Text>Tipo de red: {network.type}</Text>
            <Text>Estado: {network.isConnected ? "Conectado" : "No conectado"}</Text>
        </View>
    )
}

export default NetWork
