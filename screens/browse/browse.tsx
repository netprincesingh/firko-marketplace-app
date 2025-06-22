import {Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetailScreeen from './ProductDetailScreen';
import ProductList from './ProductList';

const BrowseStack = createStackNavigator();

const Browse = () =>{
    return(
        <BrowseStack.Navigator initialRouteName='Product List' screenOptions ={{headerShown: false}}> 
            <BrowseStack.Screen name ='Product List' component ={ProductList} />
            <BrowseStack.Screen name = 'ProductDetailScreen' component ={ProductDetailScreeen} />
        </BrowseStack.Navigator>
    );
};

export default Browse;