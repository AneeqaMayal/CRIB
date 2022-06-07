import * as React from 'react';
//-----------Navigation-----------//
import { createStackNavigator } from '@react-navigation/stack';
//----------Main Screens----------//
//-------Welcome Screen--------
import Splash from "../main/Splash";
import ImageView from "../main/ImageView"

const Stack = createStackNavigator();

function Navigator() {
  return (

    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_bottom',
    }}>
      {/* Splash Screen */}
      <Stack.Screen name="ImageView" component={ImageView} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>

  );
}

export default Navigator;