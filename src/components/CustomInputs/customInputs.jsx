import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style= {[styles.container, styles.input]}>
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
        backgroundColor: '#6D5AC6',
        width: '70%',
        height: '6.5%',

        borderColor: '#c8ffe0',
        borderWidth: 2,
        borderRadius: 10,

        paddingHorizontal:15,
        paddingVertical: 9,
        marginVertical: 10,
    },
    input:{
        color: '#ffff',
        fontSize: 15
    },
})
export default CustomInput