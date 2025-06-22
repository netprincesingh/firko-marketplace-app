import 'react-native-gesture-handler';
import {View, Text, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from "./screens/home.tsx";
import Post from "./screens/post.tsx";
import Browse from "./screens/browse/browse.tsx";


const Drawer = createDrawerNavigator();


const App = () => {
  return(
    <SafeAreaProvider>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>

        <Drawer.Screen name ='Home' component ={Home} 
        options = {{
          drawerIcon: ({size,focused}) => {
          return(
            <Image 
              style={{
                width:size,
                height:size,
                tintColor: focused? 'blue' : 'black',
              }} 
              source ={require('./icons/home.png')} />
          );
        },
       
        }}/>

        <Drawer.Screen name ='Post' component={Post} 
        options = {{drawerIcon: ({size,focused}) => {
          return(
            <Image 
              style={{
                width:size,
                height:size,
                tintColor: focused? 'blue' : 'black',
              }} 
              source ={require('./icons/pencil.png')} />
          );
        }}}/>

        <Drawer.Screen name = 'Browse' component = {Browse} 
        options = {{drawerIcon: ({size,focused}) => {
          return(
            <Image 
              style={{
                width:size,
                height:size,
                tintColor: focused? 'blue' : 'black',
              }} 
              source ={require('./icons/search.png')} />
          );
        }}}/>

      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
};

export default App;