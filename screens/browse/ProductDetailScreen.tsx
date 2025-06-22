import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>
              {product.rating?.rate || 'N/A'} ({product.rating?.count || '0'} reviews)
            </Text>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Icon name="category" size={16} color="#7f8c8d" />
          <Text style={styles.productCategory}>{product.category}</Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  detailsContainer: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  productPrice: {
    fontSize: 22,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    color: '#555',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productCategory: {
    fontSize: 16,
    color: '#7f8c8d',
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default ProductDetailScreen;