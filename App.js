import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products "
          component={Products}
          options={{
            title: 'Store',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTitleStyle: 'white',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Store',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTitleStyle: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
