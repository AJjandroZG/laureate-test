import React from 'react';
import {View} from 'react-native';
import {Battery, NetWork} from './components/Molecules';
import {stylesHeather} from './commons/styles';
import {Home, ImageSelected, Response} from './components/Views';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer>
      <View style={stylesHeather.root}>
        <Battery />
        <NetWork />
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Inicio',
          }}
        />
        <Stack.Screen
          name="ImageSelected"
          component={ImageSelected}
          options={{
            headerTitle: 'Imagen seleccionada',
          }}
        />
        <Stack.Screen
          name="Response"
          component={Response}
          options={{
            headerTitle: 'Respuesta del API REST',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default props => (
  <Root>
    <StackRouter {...props} />
  </Root>
);
