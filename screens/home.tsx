import React from 'react';
import {Text, View, StyleSheet,Image,FlatList,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () =>{

    const { width } = Dimensions.get('window');
    const containerWidth = width - 40;
    
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
       
    ];

    const renderItem = ({ item }) => (
        <View style={styles.flatItem}>
            <Text style={styles.flatTitle}>{item.title}</Text>
        </View>
    );



    return(
    <SafeAreaView style= {styles.container}>

        <Text style ={styles.text1}>For You</Text>

        <View style = {styles.flexContainer}>

            <View style = {styles.flexRow}>
                <View style ={styles.flexBox} ></View>
                <View style ={styles.flexBox} ></View>
                <View style ={styles.flexBox} ></View>
                <View style ={styles.flexBox} ></View>
            </View>

            <View style = {styles.flexRow}>
                 <View style ={styles.flexBox} ></View>
                 <View style ={styles.flexBox} ></View>
                 <View style ={styles.flexBox} ></View>
                 <View style ={styles.flexBox} ></View>
            </View>

        </View>

        <View>
            <Image 
                source ={require('./image/img1.png')}
                style={styles.image1}
            />
        </View>

        <Text style = {styles.text2}>Fresh Recommendation</Text>
        <View style ={styles.flatContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.flatListContent}
                        
            />
        </View>

        
        
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    text1:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:10,


    },
    flexContainer:{
        //flex:1,
    },
    flexRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    flexBox:{
        backgroundColor:'lightblue',
        width:'23%',
        height:80,
        borderRadius:8,
        
        
    },
    image1:{
        height:200,
        width:390,
        borderRadius:20,
        marginTop:20,
        marginBottom:20,
    },
    text2:{
        fontSize:15,
        fontWeight:'bold',
    },
    flatContainer:{
        height:165,
        marginTop:10,
    },
    flatItem:{
        backgroundColor: 'lightblue',
        padding: 20,
        marginHorizontal: 8,
        width: Dimensions.get('window').width * 0.7,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    flatTitle:{

    },
    flatListContent:{
        //paddingHorizontal: 10,
    },
});

export default Home;