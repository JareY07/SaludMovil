import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style= {styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry = {secureTextEntry}
            ></TextInput>
            
        </View>
    )

}

const styles = StyleSheet.create( {
    container:{
        backgroundColor: '#6D5AC6',
        width: '85%',
        height: '7.5%',

        borderColor: '#c8ffe0',
        borderWidth: 2,
        borderRadius: 10,

        paddingHorizontal:15,
        paddingVertical: 4.5,
        marginVertical: 10,
    },
    input:{},
})
export default CustomInput