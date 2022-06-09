import * as React from 'react';
//-----------Navigation-----------//
import { createStackNavigator } from '@react-navigation/stack';
//----------Main Screens----------//
//-------Welcome Screen--------
import Splash from "../main/Splash";
import ImageView from "../main/ImageView"
import ImageUploader from "../main/ImageUploader"

const Stack = createStackNavigator();

function Navigator() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      {/* Main Screen */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="ImageUploader" component={ImageUploader} />
      <Stack.Screen name="ImageView" component={ImageView} />
      {/* Main Screen */}

    </Stack.Navigator>

  );
}

export default Navigator;