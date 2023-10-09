import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form';

const ForgotPassword = () => {

    const {control, handleSubmit } = useForm();

    const OnSendPressed = () => {
        navigation.navigate('NewPassword')
    }

    const OnSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    const navigation = useNavigation();


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Ingrese su Correo</Text>

        <CustomInput 
        name='email'
        placeholder="Correo Electronico"
        control={control}
        rules ={{required: "El campo es obligatorio", pattern: {
            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        }}}
        />


        <CustomButton text="Enviar" onPress={handleSubmit(OnSendPressed)} />

         <CustomButton 
        text="Volver al Inicio de Sesion" 
        onPress={OnSignInPressed} 
        type={"TERTIARY"}/>
        </View>
        </ScrollView> 
    )}

const styles = StyleSheet.create({
    is: {
        fontSize: 25,
        color: '#614bc3',
        fontWeight: "bold",
        padding: 70,
        textAlign: 'center'
        
    },
    root: {
        alignItems: 'center',
    },
    text: {
        marginVertical: 15,
        marginHorizontal: 53,
        color: '#c8ffe0'
    },
    link: {
        color: '#33BBC5'
    }
})



export default ForgotPassword;