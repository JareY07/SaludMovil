import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form';


const NewPassword = () => {

    const {control, handleSubmit} = useForm();

    const OnSubmitPressed = () => {
        navigation.navigate('HomeScreen')
    }

    const OnSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Cambiar contraseña</Text>

        <CustomInput 
        name= 'code'
        placeholder="Código de confirmación"
        control={control} 
        rules={{required: 'Este campo es requerido'}}/>

        <CustomInput 
        name='NewPassword'
         placeholder="Nueva Contraseña"
         control={control}
         rules={{required: 'Este campo es requerido', minLength: {
            value: 8,
            message: 'La contraseña debe de tener al menos 8 caracteres'
         }}}/>


        <CustomButton text="Cambiar" onPress={handleSubmit(OnSubmitPressed)} />


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
        color: '#c8ffe0',
    },
    link: {
        color: '#33BBC5'
    }
})



export default NewPassword;