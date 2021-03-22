import React from 'react';
import {View, Text} from 'react-native';
import {useBatteryLevel} from 'react-native-device-info';
import styles from './styles';

const Battery = () => {
  const batteryLevel = useBatteryLevel() * 100;

  return (
    <View style={styles.root}>
      <View style={styles.battery}>
        <View
          style={[
            styles.level,
            {
              width: `${batteryLevel}%`,
            },
          ]}>
          <Text style={styles.text}>{batteryLevel.toFixed()} %</Text>
        </View>
      </View>
      <View style={styles.positiveBattery} />
    </View>
  );
};

export default Battery;
