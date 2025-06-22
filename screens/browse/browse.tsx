import {Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetailScreeen from './ProductDetailScreen';
import ProductList from './ProductList';

const BrowseStack = createStackNavigator();

const Browse = () =>{
    return(
        <BrowseStack.Navigator screenOptions ={{headerShown: true}}>
            <BrowseStack.Screen name ='Product List' component ={ProductList} />
        </BrowseStack.Navigator>
    );
};

export default Browse;