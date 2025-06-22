import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator,RefreshControl} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ProductList = ({navigation}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] =useState(false);

    const fetchProducts = async () => {
        try 
        {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
            setError(null);
        }
        catch(err)
        {
            setError(err.message);
        }
        finally
        {
            setLoading(false);
            setRefreshing(false);
        }
    };


    useEffect(

        ()=>{
            fetchProducts();
        },

    []);



    const onRefresh = () =>{

        setRefreshing(true);
        fetchProducts();
    };




    const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <Icon name="chevron-right" size={24} color="#999" />
    </TouchableOpacity>
    );

    


    if(loading && !refreshing)
    {
        return(
            <View style = {styles.center} >
                <ActivityIndicator size ="large" color = "#0000ff" />
            </View>
        );
    };

    if(error)
    {
        return(
            <View style = {styles.center}>
                <Text>Error message: {error} </Text>
                <TouchableOpacity style ={styles.retryButton} onPress = {fetchProducts}>
                    <Text style ={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    };


    



    return(
        <View style = {styles.container}>

            <FlatList 

                data={products}
                renderItem = {renderProductItem}
                keyExtractor ={(item) => item.id.toString()}
                contentContainerStyle ={styles.listContent}
                refreshControl={
                    <RefreshControl 
                     refreshing ={refreshing}
                     onRefresh ={onRefresh}
                     colors={['#0000ff']}
                    />
                }
            />

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 10,
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
    resizeMode: 'contain',
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  productDescription: {
    fontSize: 12,
    color: '#555',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#0000ff',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductList;