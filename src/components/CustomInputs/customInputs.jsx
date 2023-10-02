import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style= {[styles.container]}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry = {secureTextEntry}
            style={styles.input}
            ></TextInput>
            
        </View>
    )

}

const styles = StyleSheet.create( {
    container:{
        backgroundColor: '#f5f5f5',
        width: '80%',

        borderColor: '#41C2C5',
        borderWidth: 2,
        borderRadius: 10,

        paddingHorizontal:15,
        paddingVertical: 9,
        marginVertical: 10,
    },
    input:{
        fontSize: 15,
        color: '#000000',
    },
})
export default CustomInput