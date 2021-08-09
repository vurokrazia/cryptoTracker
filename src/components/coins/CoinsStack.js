import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CointDetailScreen from './../coinDetail/CoinDetailScreen';
import Colors from 'cryptoTracker/src/res/colors';
const Stack = createStackNavigator();
const CoinsStack = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl
        },
        headerTintColor: Colors.white
      }
    }>
      <Stack.Screen name="coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CointDetailScreen} />
    </Stack.Navigator>
  );
}

export default CoinsStack;