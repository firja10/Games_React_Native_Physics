import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Intro = () => {
    return(
        <View style = {styles.container}>
            <Text>Masukkin Cuk Namanya</Text>
            <TextInput style = {styles.textinput} />
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
        },

        textinput:{
            borderWidth:2,
            borderColor: '#424242',
        },
});