import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Post = () =>{

    const [formData, setFormData] = useState({
        title:'',
        description: '',
        price:'',
        type:'',
        imageUrl: ''
    });

    const handleInputChange =(name,value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted', formData);
    }

    return(
        <ScrollView style ={styles.container}>
            <Text style ={styles.label}>Title</Text>
            <TextInput 
              style = {styles.input}
              value={formData.title}
              onChangeText ={(text) => handleInputChange('title',text)}
              placeholder="Enter title"
            />


            <Text style ={styles.label}>Description</Text>
            <TextInput
                style ={[styles.input,styles.multiLineInput]}
                value={formData.description}
                onChangeText= {(text) => handleInputChange('description', text)}
                placeholder="Enter description"
                multiline
                numberOfLines={4}
            />


            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                value={formData.price}
                onChangeText={(text) => handleInputChange('price', text)}
                placeholder="Enter price"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Category</Text>
            <View style = {styles.pickerContainer}>
            <Picker
               selectedValue={formData.type}
               style={styles.picker}
               onValueChange={(itemValue) => handleInputChange('type', itemValue)}
               mode="dropdown"
            >
                <Picker.Item label ="General" value ="general" />
                <Picker.Item label="Electronics" value="electronics" />
                <Picker.Item label="Clothing" value="clothing" />
                <Picker.Item label="Food" value="food" />
                <Picker.Item label="Other" value="other" />

            </Picker>
            </View>


            <Text style={styles.label}>Image URL</Text>
            <TextInput
                style={styles.input}
                value={formData.imageUrl}
                onChangeText={(text) => handleInputChange('imageUrl', text)}
                placeholder="Enter image URL"
                
            />

            <View style ={styles.buttonContainer}>
                <Button 
                    
                    title="Submit"
                    onPress={handleSubmit}
                />

            </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: 'white',
    },
    label:{
        fontSize: 16,
        marginBottom: 8,
        fontWeight:'bold',
    },
    input:{
        height:40,
        borderColor:'black',
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:10,
        marginBottom: 20,

    },
    multiLineInput:{
        height: 100,
        textAlignVertical:'top',
    },
    pickerContainer:{
        borderWidth:1,
        borderRadius:4,
    },
    picker:{
        height: 60,
        width: '100%',
        padding:10,
        marginBottom: 10,
        borderWidth:1,
        borderColor:'black',
    },
    buttonContainer:{
        marginTop:20,
        
    }
});

export default Post;