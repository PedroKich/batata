import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Vendas from './src/pages/Vendas';

const Stack = createNativeStackNavigator();

export default function app(){
  return(
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Sobre' component={Sobre} />
          <Stack.Screen name='Vendas' component={Vendas} />

        </Stack.Navigator>
      </NavigationContainer>
  )
}