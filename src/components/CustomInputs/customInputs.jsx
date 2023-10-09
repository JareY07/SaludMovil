import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';


const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
    return (
        <Controller 
            control = {control}
            name = {name}
            rules = {rules}
            render = {({field: {value, onChange, onBlur}, fieldState:{error}}) => (
                <>
                    <View style= {[styles.container, {borderColor: error ? 'red' : '#41C2C5'}]}>
                        <TextInput
                        value = {value}
                        onChangeText = {onChange} 
                        placeholder = {placeholder}
                        onBlur = {onBlur}
                        secureTextEntry = {secureTextEntry}
                        style={[styles.input, {}]} 
                        />
                    </View>
                    {error && (
                        <Text style = {{color: 'red',
                         alignSelf: 'stretch',
                          paddingHorizontal: 50}}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
            />
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